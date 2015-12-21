// Decompiled with JetBrains decompiler
// Type: two.Controllers.SearchController
// Assembly: two, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 9B0281BB-FC0F-4F23-B370-957761C517AE
// Assembly location: E:\wwwroot\bin\two.dll

using Bing;
using Microsoft.Practices.ServiceLocation;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SolrNet;
using SolrNet.Commands.Parameters;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Xml.Linq;
using two.Models;
using Yam.Microsoft.Translator;

namespace two.Controllers
{
    [RoutePrefix("Test")]
    public class SearchController : ApiController
    {
        private static string[] langCodes = new string[3]
        {
      "de",
      "en",
      "ru"
        };
        private static AdmAuthentication admAuth = new AdmAuthentication("HouseOfStacks_tapi", ConfigurationManager.ConnectionStrings["admAuth"].ConnectionString);
        private static string bingKey = ConfigurationManager.ConnectionStrings["bingKey"].ConnectionString;
        private static Dictionary<string, string> LangMap = new Dictionary<string, string>()
    {
      {
        "English",
        "en"
      },
      {
        "Russian",
        "ru"
      },
      {
        "German",
        "de"
      },
      {
        "French",
        "fr"
      },
      {
        "Arabic",
        "ar"
      },
      {
        "*",
        "*"
      }
    };
        private const string ServiceBaseUri = "https://api.datamarket.azure.com/";

        [Route("HashTag/{query}")]
        public IHttpActionResult Get(string query)
        {
            SolrQuery solrQuery1 = new SolrQuery("tweet_hashtags:" + query);
            ISolrOperations<Tweet> instance = ServiceLocator.Current.GetInstance<ISolrOperations<Tweet>>();
            SolrQuery solrQuery2 = solrQuery1;
            QueryOptions queryOptions = new QueryOptions();
            queryOptions.Fields = (ICollection<string>)new string[2]
            {
        "*",
        "score"
            };
            queryOptions.Rows = new int?(20);
            QueryOptions options = queryOptions;
            return (IHttpActionResult)this.Ok<SolrQueryResults<Tweet>>(instance.Query((ISolrQuery)solrQuery2, options));
        }

        [Route("Map")]
        [HttpPost]
        public IHttpActionResult GetMapData(Query query)
        {
            ISolrOperations<Tweet> instance = ServiceLocator.Current.GetInstance<ISolrOperations<Tweet>>();
            StatsData content = new StatsData();
            Dictionary<string, string> dictionary = new Dictionary<string, string>();
            DateTime now = DateTime.Now;
            try
            {
                AbstractSolrQuery abstractSolrQuery1 = (AbstractSolrQuery)null;
                if (!string.IsNullOrEmpty(query.Lang) && !string.IsNullOrWhiteSpace(query.Lang))
                {
                    if (abstractSolrQuery1 == null)
                    {
                        abstractSolrQuery1 = (AbstractSolrQuery)new SolrQuery("lang:" + SearchController.LangMap[query.Lang]);
                    }
                }
                else
                {
                    try
                    {
                        dictionary = SearchController.TranslateMethod("Bearer " + SearchController.admAuth.GetAccessToken().access_token, query.QueryText);
                    }
                    catch (WebException ex)
                    {
                    }
                    foreach (KeyValuePair<string, string> keyValuePair in dictionary)
                    {
                        if (!string.IsNullOrEmpty(keyValuePair.Value))
                        {
                            if (abstractSolrQuery1 == null)
                            {
                                abstractSolrQuery1 = (AbstractSolrQuery)new SolrQuery(keyValuePair.Key + ":" + keyValuePair.Value);
                            }
                            else
                            {

                                abstractSolrQuery1 = abstractSolrQuery1 | (AbstractSolrQuery)new SolrQuery(keyValuePair.Key + ":" + keyValuePair.Value);
                            }
                        }
                    }
                }

                int year1 = query.StartTime.Year;
                DateTime dateTime = query.StartTime;
                int month1 = dateTime.Month;
                dateTime = query.StartTime;
                int day1 = dateTime.Day;
                // ISSUE: explicit reference operation
                DateTime start = new DateTime(year1, month1, day1);


                dateTime = query.EndTime;
                int year2 = dateTime.Year;
                dateTime = query.EndTime;
                int month2 = dateTime.Month;
                dateTime = query.EndTime;
                int day2 = dateTime.Day;

                DateTime to = new DateTime(year2, month2, day2);
                AbstractSolrQuery abstractSolrQuery2;
                if (string.IsNullOrEmpty(query.QueryText) || string.IsNullOrWhiteSpace(query.QueryText))
                    abstractSolrQuery2 = (AbstractSolrQuery)new SolrQuery("*");
                else if (abstractSolrQuery1 == null)
                {
                    abstractSolrQuery2 = (AbstractSolrQuery)new SolrQuery(query.QueryText);
                }
                else
                {
                    abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQuery(query.QueryText);
                }

                if (!string.IsNullOrEmpty(query.HashTag) && !string.IsNullOrWhiteSpace(query.HashTag))
                {

                    abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQuery("tweet_hashtags:" + query.HashTag);
                }
                if (!string.IsNullOrEmpty(query.Country) && !string.IsNullOrWhiteSpace(query.Country))
                {
                    abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQuery("locationcode:" + Enumerable.First<MapCode>((IEnumerable<MapCode>)MapData.MapCodes, (Func<MapCode, bool>)(i => i.name.Equals(query.Country))).code);
                }
                if (!string.IsNullOrEmpty(query.Organization) && !string.IsNullOrWhiteSpace(query.Organization))
                {
                    abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQuery("Entity_Organizaton:" + query.Organization);
                }
                if (!string.IsNullOrEmpty(query.People) && !string.IsNullOrWhiteSpace(query.People))
                {
                    abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQuery("Entity_People:" + query.People);
                }
                if (!string.IsNullOrEmpty(query.Location) && !string.IsNullOrWhiteSpace(query.Location))
                {
                    abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQuery("Entity_Location:" + query.Location);
                }
                if (query.IsTimeLineChange)
                {
                    DateTime from2;

                    dateTime = query.StartTime;
                    int year3 = dateTime.Year;
                    dateTime = query.StartTime;
                    int month3 = dateTime.Month;
                    dateTime = query.StartTime;
                    int day3 = dateTime.Day;
                    from2 = new DateTime(year3, month3, day3);

                    abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQueryByRange<DateTime>("created_at", from2, from2.AddDays(1.0));
                }
                if (!query.IsTimeLineChange)
                {

                    abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQueryByRange<DateTime>("created_at", start, to);
                }
                ISolrOperations<Tweet> solrOperations = instance;

                QueryOptions queryOptions = new QueryOptions();
                queryOptions.Fields = (ICollection<string>)new string[2]
                {
          "*",
          "score"
                };
                queryOptions.Rows = new int?(20);
                queryOptions.Facet = new FacetParameters()
                {
                    Queries = (ICollection<ISolrFacetQuery>)new SolrFacetFieldQuery[5]
                  {
                    new SolrFacetFieldQuery("locationcode"),
                    new SolrFacetFieldQuery("lang"),
                    new SolrFacetFieldQuery("Entity_Organizaton"),
                    new SolrFacetFieldQuery("Entity_Location"),
                    new SolrFacetFieldQuery("Entity_People")
                  }
                };
                QueryOptions options = queryOptions;
                SolrQueryResults<Tweet> solrQueryResults = solrOperations.Query((ISolrQuery)abstractSolrQuery1, options);
                foreach (KeyValuePair<string, int> keyValuePair in (IEnumerable<KeyValuePair<string, int>>)solrQueryResults.FacetFields["lang"])
                {
                    KeyValuePair<string, int> facet = keyValuePair;
                    content.codes.Add(new LangCount()
                    {
                        count = facet.Value,
                        language = Enumerable.First<KeyValuePair<string, string>>((IEnumerable<KeyValuePair<string, string>>)SearchController.LangMap, (Func<KeyValuePair<string, string>, bool>)(i => i.Value.Equals(facet.Key))).Key
                    });
                }
                foreach (KeyValuePair<string, int> keyValuePair in (IEnumerable<KeyValuePair<string, int>>)solrQueryResults.FacetFields["locationcode"])
                {
                    KeyValuePair<string, int> facet = keyValuePair;
                    MapCode mapCode = Enumerable.FirstOrDefault<MapCode>((IEnumerable<MapCode>)MapData.MapCodes, (Func<MapCode, bool>)(i => i.code.Equals(facet.Key, StringComparison.CurrentCultureIgnoreCase)));
                    if (mapCode != null)
                    {
                        mapCode.value = facet.Value;
                        content.mapData.Add(mapCode);
                    }
                }
                foreach (KeyValuePair<string, int> keyValuePair in (IEnumerable<KeyValuePair<string, int>>)solrQueryResults.FacetFields["Entity_Organizaton"])
                {
                    KeyValuePair<string, int> facet = keyValuePair;
                    content.organization.Add(facet.Key, facet.Value);
                }
                foreach (KeyValuePair<string, int> keyValuePair in (IEnumerable<KeyValuePair<string, int>>)solrQueryResults.FacetFields["Entity_Location"])
                {
                    KeyValuePair<string, int> facet = keyValuePair;
                    content.location.Add(facet.Key, facet.Value);
                }
                foreach (KeyValuePair<string, int> keyValuePair in (IEnumerable<KeyValuePair<string, int>>)solrQueryResults.FacetFields["Entity_People"])
                {
                    KeyValuePair<string, int> facet = keyValuePair;
                    content.people.Add(facet.Key,facet.Value);
                }
            }
            catch (Exception ex)
            {
                double totalMilliseconds = (DateTime.Now - now).TotalMilliseconds;
            }
            return (IHttpActionResult)this.Ok<StatsData>(content);
        }

        [Route("Suggest/{query}")]
        public IHttpActionResult GetSuggestions(string query)
        {
            List<Suggestions> content = new List<Suggestions>();
            WebResponse response = WebRequest.Create(ConfigurationManager.ConnectionStrings["SolrNet"]+"/suggest?suggest=true&suggest.dictionary=mySuggester&wt=json&suggest.q=" + HttpUtility.UrlEncode(query)).GetResponse();
            using (response.GetResponseStream())
            {
                Encoding utF8 = Encoding.UTF8;
                using (StreamReader streamReader = new StreamReader(response.GetResponseStream(), utF8))
                {
                    JToken jtoken1 = JObject.Parse(streamReader.ReadToEnd()).Last.First.First.First.First.First[(object)"suggestions"];
                    int num = 1;
                    foreach (JToken jtoken2 in jtoken1.Children())
                    {
                        content.Add(new Suggestions()
                        {
                            label = jtoken2[(object)"term"].ToString(),
                            value = jtoken2[(object)"term"].ToString()
                        });
                        ++num;
                    }
                }
            }
            return (IHttpActionResult)this.Ok<List<Suggestions>>(content);
        }

        [Route("Sentiment")]
        [HttpPost]
        public IHttpActionResult GetSentiment(Query query)
        {
            SentimentResult content = new SentimentResult();
            //return (IHttpActionResult)this.Ok<SentimentResult>(content);
            using (HttpClient httpClient = new HttpClient())
            {
                ResultSet results = this.GetResults(query,false);
                httpClient.BaseAddress = new Uri("https://api.datamarket.azure.com/");
                string str1 = "Basic " + Convert.ToBase64String(Encoding.ASCII.GetBytes("AccountKey:" + SearchController.bingKey));
                httpClient.DefaultRequestHeaders.Add("Authorization", str1);
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                string requestUri = "data.ashx/amla/text-analytics/v1/GetSentimentBatch";
                SentimentInput sentimentInput = new SentimentInput();
                StringBuilder stringBuilder = new StringBuilder();
                foreach (Tweet tweet in results.result)
                    stringBuilder.Append(tweet.Text);
                if (results.result.Count == 0)
                    stringBuilder.Append(results.Summary);
                List<SentimentInputClass> list = sentimentInput.Inputs;
                SentimentInputClass sentimentInputClass = new SentimentInputClass();
                sentimentInputClass.Id = 1;
                string str2 = stringBuilder.ToString();
                sentimentInputClass.Text = str2;
                list.Add(sentimentInputClass);
                StringContent stringContent = new StringContent(new JObject((object)new JProperty("Inputs", (object)new JArray((object)new JObject(new object[2]
                {
          (object) new JProperty("Id", (object) "1"),
          (object) new JProperty("Text", (object) stringBuilder.ToString())
                })))).ToString());
                Task<HttpResponseMessage> task1 = httpClient.PostAsync(requestUri, (HttpContent)stringContent);
                task1.Wait();
                HttpResponseMessage result1 = task1.Result;
                Task<string> task2 = result1.Content.ReadAsStringAsync();
                task2.Wait();
                string result2 = task2.Result;
                if (!result1.IsSuccessStatusCode)
                    throw new Exception(string.Concat(new object[4]
                    {
            (object) "Call to get sentiment failed with HTTP status code: ",
            (object) result1.StatusCode,
            (object) " and contents: ",
            (object) result2
                    }));
                foreach (JToken jtoken in (IEnumerable<JToken>)JsonConvert.DeserializeObject<JObject>(result2)["SentimentBatch"])
                    content.positiveValue = double.Parse(jtoken[(object)"Score"].ToString()) * 0.8;
            }
            return (IHttpActionResult)this.Ok<SentimentResult>(content);
        }

        [Route("Query")]
        [HttpPost]
        public IHttpActionResult Get(Query query)
        {
            return (IHttpActionResult)this.Ok<ResultSet>(this.GetResults(query,true));
        }

        private ResultSet GetResults(Query query,bool isSummaryRequired)
        {
            List<Tweet> list = (List<Tweet>)null;
            Dictionary<string, string> dictionary = new Dictionary<string, string>();
            SearchController.admAuth.GetAccessToken();

            AbstractSolrQuery abstractSolrQuery1 = (AbstractSolrQuery)null;
            if (!string.IsNullOrEmpty(query.Lang) && !string.IsNullOrWhiteSpace(query.Lang))
            {
                if (abstractSolrQuery1 == null)
                {
                    abstractSolrQuery1 = (AbstractSolrQuery)new SolrQuery("lang:" + SearchController.LangMap[query.Lang]);
                }
            }
            else
            {
                try
                {
                    dictionary = SearchController.TranslateMethod("Bearer " + SearchController.admAuth.GetAccessToken().access_token, query.QueryText);
                }
                catch (WebException ex)
                {
                }
                foreach (KeyValuePair<string, string> keyValuePair in dictionary)
                {
                    if (!string.IsNullOrEmpty(keyValuePair.Value))
                    {
                        if (abstractSolrQuery1 == null)
                        {
                            abstractSolrQuery1 = (AbstractSolrQuery)new SolrQuery(keyValuePair.Key + ":" + keyValuePair.Value);
                        }
                        else
                        {

                            abstractSolrQuery1 = abstractSolrQuery1 | (AbstractSolrQuery)new SolrQuery(keyValuePair.Key + ":" + keyValuePair.Value);
                        }
                    }
                }
            }

            DateTime from1;
            // ISSUE: explicit reference operation
            // ISSUE: variable of a reference type
            int year1 = query.StartTime.Year;
            DateTime dateTime = query.StartTime;
            int month1 = dateTime.Month;
            dateTime = query.StartTime;
            int day1 = dateTime.Day;
            // ISSUE: explicit reference operation
            DateTime start = new DateTime(year1, month1, day1);


            dateTime = query.EndTime;
            int year2 = dateTime.Year;
            dateTime = query.EndTime;
            int month2 = dateTime.Month;
            dateTime = query.EndTime;
            int day2 = dateTime.Day;

            DateTime to = new DateTime(year2, month2, day2);
            AbstractSolrQuery abstractSolrQuery2;
            if (string.IsNullOrEmpty(query.QueryText) || string.IsNullOrWhiteSpace(query.QueryText))
                abstractSolrQuery2 = (AbstractSolrQuery)new SolrQuery("*");
            else if (abstractSolrQuery1 == null)
            {
                abstractSolrQuery2 = (AbstractSolrQuery)new SolrQuery(query.QueryText);
            }
            else
            {
                abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQuery(query.QueryText);
            }

            if (!string.IsNullOrEmpty(query.HashTag) && !string.IsNullOrWhiteSpace(query.HashTag))
            {

                abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQuery("tweet_hashtags:" + query.HashTag);
            }
            if (!string.IsNullOrEmpty(query.Country) && !string.IsNullOrWhiteSpace(query.Country))
            {
                abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQuery("locationcode:" + Enumerable.First<MapCode>((IEnumerable<MapCode>)MapData.MapCodes, (Func<MapCode, bool>)(i => i.name.Equals(query.Country))).code);
            }
            if (query.IsTimeLineChange)
            {
                DateTime from2;

                dateTime = query.StartTime;
                int year3 = dateTime.Year;
                dateTime = query.StartTime;
                int month3 = dateTime.Month;
                dateTime = query.StartTime;
                int day3 = dateTime.Day;
                from2 = new DateTime(year3, month3, day3);

                abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQueryByRange<DateTime>("created_at", from2, from2.AddDays(1.0));
            }
            if (!query.IsTimeLineChange)
            {

                abstractSolrQuery1 = abstractSolrQuery1 & (AbstractSolrQuery)new SolrQueryByRange<DateTime>("created_at", start, to);
            }
            ISolrOperations<Tweet> instance = ServiceLocator.Current.GetInstance<ISolrOperations<Tweet>>();
            DateTime now = DateTime.Now;
            try
            {
                ISolrOperations<Tweet> solrOperations = instance;

                QueryOptions queryOptions = new QueryOptions();
                queryOptions.Fields = (ICollection<string>)new string[2]
                {
          "*",
          "score"
                };
                queryOptions.Rows = new int?(20);
                queryOptions.OrderBy = (ICollection<SortOrder>)new SortOrder[2]
                {
          new SortOrder("followers_count", Order.DESC),
          new SortOrder("retweetCount", Order.DESC)
                };
                queryOptions.ExtraParams = (IEnumerable<KeyValuePair<string, string>>)new Dictionary<string, string>()
        {
          {
            "timeAllowed",
            "500"
          }
        };
                QueryOptions options = queryOptions;
                list = (List<Tweet>)solrOperations.Query((ISolrQuery)abstractSolrQuery1, options);
            }
            catch (Exception ex)
            {
            }
            ResultSet rs = new ResultSet();
            if (list != null && Enumerable.Any<Tweet>((IEnumerable<Tweet>)list))
            {
                Tweet tweet = Enumerable.Aggregate<Tweet>((IEnumerable<Tweet>)list, (Func<Tweet, Tweet, Tweet>)((i1, i2) =>
              {
                  if (i1.score <= i2.score)
                      return i2;
                  return i1;
              }));
                rs.maxScore = tweet.score;
                rs.result = list;
            }
            else
                rs.result = new List<Tweet>();

            if(isSummaryRequired)
            {
                if (dictionary.ContainsKey("text_en"))
                {
                    this.GetWikiSummary(dictionary["text_en"], rs);
                    if (query.QueryText != dictionary["text_en"])
                        rs.translation = dictionary["text_en"];
                }
            }
            
            return rs;
        }

        private static Dictionary<string, string> TranslateMethod(string authToken, string query)
        {
            Dictionary<string, string> dictionary = new Dictionary<string, string>();
            WebResponse webResponse = (WebResponse)null;
            try
            {
                foreach (string str1 in SearchController.langCodes)
                {
                    string str2 = "";
                    string str3 = str1;
                    HttpWebRequest httpWebRequest = (HttpWebRequest)WebRequest.Create("http://api.microsofttranslator.com/v2/Http.svc/Translate?text=" + HttpUtility.UrlEncode(query) + "&from=" + str2 + "&to=" + str3);
                    httpWebRequest.Headers.Add("Authorization", authToken);
                    webResponse = httpWebRequest.GetResponse();
                    using (webResponse.GetResponseStream())
                    {
                        Encoding utF8 = Encoding.UTF8;
                        using (StreamReader streamReader = new StreamReader(webResponse.GetResponseStream(), utF8))
                        {
                            XDocument xdocument = XDocument.Parse(streamReader.ReadToEnd());
                            dictionary.Add("text_" + str1, ((XElement)xdocument.FirstNode).Value);
                        }
                    }
                }
            }
            catch
            {
            }
            finally
            {
                if (webResponse != null)
                    webResponse.Close();
            }
            return dictionary;
        }

        private void GetWikiSummary(string query, ResultSet rs)
        {
            try
            {
                BingSearchContainer bingSearchContainer = new BingSearchContainer(new Uri("https://api.datamarket.azure.com/Bing/Search"));
                string bing_key = ConfigurationManager.ConnectionStrings["bing_key"].ConnectionString;
                //NetworkCredential networkCredential = new NetworkCredential(bing_key, bing_key);
                bingSearchContainer.Credentials = new NetworkCredential(bing_key, bing_key);
                string Query = query + " wiki";

                foreach (WebResult webResult in bingSearchContainer.Web(Query, null, null, null, null, null, null, null).AddQueryOption("$top", (object)10).Execute())
                {
                    if (webResult.Url.Contains("wikipedia"))
                    {
                        WebResponse response = WebRequest.Create("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" + Enumerable.Last<string>((IEnumerable<string>)webResult.Url.Split('/'))).GetResponse();
                        using (response.GetResponseStream())
                        {
                            Encoding utF8 = Encoding.UTF8;
                            using (StreamReader streamReader = new StreamReader(response.GetResponseStream(), utF8))
                            {
                                string str4 = JObject.Parse(streamReader.ReadToEnd()).Last.Last[(object)"pages"].First.First[(object)"extract"].ToString();
                                rs.Summary = str4.Length > 400 ? str4.Substring(0, 400) : str4;
                                rs.summaryLink = webResult.Url;
                                if (str4.Length >= 400)
                                    break;
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
            }
        }
    }
}
