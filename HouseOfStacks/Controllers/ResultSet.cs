// Decompiled with JetBrains decompiler
// Type: two.Controllers.ResultSet
// Assembly: two, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 9B0281BB-FC0F-4F23-B370-957761C517AE
// Assembly location: E:\wwwroot\bin\two.dll

using System.Collections.Generic;
using two.Models;

namespace two.Controllers
{
  public class ResultSet
  {
    public List<Tweet> result { get; set; }

    public string Summary { get; set; }

    public double maxScore { get; set; }

    public string summaryLink { get; set; }

    public string translation { get; set; }
  }
}
