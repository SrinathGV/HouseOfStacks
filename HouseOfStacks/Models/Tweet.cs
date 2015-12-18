// Decompiled with JetBrains decompiler
// Type: two.Models.Tweet
// Assembly: two, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 9B0281BB-FC0F-4F23-B370-957761C517AE
// Assembly location: E:\wwwroot\bin\two.dll

using SolrNet.Attributes;
using System;
using System.Collections.Generic;

namespace two.Models
{
  public class Tweet
  {
    [SolrUniqueKey("id")]
    public string Id { get; set; }

    [SolrUniqueKey("score")]
    public double score { get; set; }

    [SolrField("text")]
    public string Text { get; set; }

    [SolrField("lang")]
    public string Lang { get; set; }

    [SolrField("followers_count")]
    public int FollowerCount { get; set; }

    [SolrField("retweetCount")]
    public int retweetCount { get; set; }

    [SolrField("locationcode")]
    public string Location { get; set; }

    [SolrField("author")]
    public string Author { get; set; }

    [SolrField("tweet_hashtags")]
    public List<string> HashTags { get; set; }

    [SolrField("created_at")]
    public DateTime CreatedAt { get; set; }

    [SolrField("miniprofileurl")]
    public string imgUrl { get; set; }
  }
}
