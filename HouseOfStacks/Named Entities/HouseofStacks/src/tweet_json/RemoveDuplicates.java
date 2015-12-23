package tweet_json;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Stream;

import com.sun.jndi.toolkit.url.Uri;

import twitter4j.JSONArray;
import twitter4j.JSONException;
import twitter4j.JSONObject;

public class RemoveDuplicates {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	String dir = System.getProperty("user.dir");
	File f1 = new File(dir+"\\tweets");
	
	
	List<String> fileStream = new ArrayList<String>();
	
	for(File f2 : f1.listFiles())
	{
		try {
			System.out.println(f2.toPath());
			 Files.lines(f2.toPath(),Charset.forName("UTF-8")).forEach(each -> {fileStream.add(each);});			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	//System.out.println(fileStream);
	processJSON(fileStream);
	}

	/**
	 * @param files
	 */
	private static void processJSON(List<String> files) {
		// TODO Auto-generated method stub
		List<String> processedIds = new ArrayList<String>();
		int enTweets = 0;
		int ruTweets = 0;
		int deTweets = 0;
		int frTweets = 0;
		int arTweets = 0;
		try {
			Date d = new Date();
			DateFormat format = new SimpleDateFormat("dd-MMM-yyyy");
			String fileName = d.toString();
			
			
			/*File outFile1 =  new File("processed\\"+format.format(d)+"_ru");
			FileOutputStream fw1 = new FileOutputStream(outFile1);
			OutputStreamWriter bw1 = new OutputStreamWriter(fw1,"UTF-8");
			
			File outFile2 =  new File("processed\\"+format.format(d)+"_de");
			FileOutputStream fw2 = new FileOutputStream(outFile2);
			OutputStreamWriter bw2 = new OutputStreamWriter(fw2,"UTF-8");*/
			
			Boolean dir = new File("processed\\"+format.format(d)).mkdirs();
			
			File outFile3 =  new File("processed\\processedIDs");
			
			File outFile =  new File("processed\\"+format.format(d)+"\\tweet.json");
			FileOutputStream fw = new FileOutputStream(outFile);
			OutputStreamWriter bw = new OutputStreamWriter(fw,"UTF-8");
			bw.write("[");
			int j=0;
			for(String each : files)
			{
		//	System.out.println("each"+each);
				tweetObject tw = IRProject.parseObject(each);
				//System.out.println("tweet object"+tw);
			
				if(tw == null || tw.getId() == "0")
				{
					System.out.println("each"+tw.getId());
					
				
				
					continue;
				}
				
				
				String Id  = tw.getId();
			//	System.out.println("id"+Id);
				//process english tweeets
				if(!processedIds.contains(Id))
				{
					if(tw.getLang().equals("en"))
					{
						enTweets++;
				}
					else if(tw.getLang().equals("ru"))
					{
						ruTweets++;
					}
					else if(tw.getLang().equals("de"))
					{
						deTweets++;
					}
					else if(tw.getLang().equals("fr"))
					{
						frTweets++;
					}
					else if(tw.getLang().equals("ar"))
					{
						arTweets++;
					}
					
					processedIds.add(Id);
					JSONObject obj = new JSONObject(tw);
			    	bw.write(obj.toString());
					bw.write(",\n");	
//					j++;
//					
				}
					
			}
			
			bw.write("]");
			bw.close();
			
			FileWriter fwr = new FileWriter(outFile3);
			
		for(String id : processedIds)
			{
			fwr.write(String.valueOf(id));
				fwr.write("\n");
		}
			fwr.write("Russian count "+ruTweets+"\n");
			fwr.write("German count "+deTweets+"\n");
			fwr.write("English count "+ruTweets+"\n");
			System.out.println(j);
							
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
