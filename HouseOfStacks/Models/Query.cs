// Decompiled with JetBrains decompiler
// Type: two.Models.Query
// Assembly: two, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 9B0281BB-FC0F-4F23-B370-957761C517AE
// Assembly location: E:\wwwroot\bin\two.dll

using Newtonsoft.Json;
using System;

namespace two.Models
{
  public class Query
  {
    [JsonProperty("Query")]
    public string QueryText { get; set; }

    [JsonProperty("Lang")]
    public string Lang { get; set; }

    [JsonProperty("HashTag")]
    public string HashTag { get; set; }

    [JsonProperty("StartTime")]
    public DateTime StartTime { get; set; }

    [JsonProperty("EndTime")]
    public DateTime EndTime { get; set; }

    [JsonProperty("MinRelevance")]
    public int MinRelevance { get; set; }

    [JsonProperty("Location")]
    public string Location { get; set; }

    [JsonProperty("TimeLineChange")]
    public bool IsTimeLineChange { get; set; }
  }
}
