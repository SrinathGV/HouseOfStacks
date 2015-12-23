package content_tagging;

import edu.stanford.nlp.ie.AbstractSequenceClassifier;
import edu.stanford.nlp.ie.NERFeatureFactory;
import edu.stanford.nlp.ie.crf.*;
import edu.stanford.nlp.ie.ner.CMMClassifier;
import edu.stanford.nlp.io.IOUtils;
import edu.stanford.nlp.ling.CoreLabel;
import edu.stanford.nlp.ling.CoreAnnotations;
import edu.stanford.nlp.sequences.DocumentReaderAndWriter;
import edu.stanford.nlp.util.Triple;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonPrimitive;






/** This is a demo of calling CRFClassifier programmatically.
 *  <p>
 *  Usage: {@code java -mx400m -cp "*" NERDemo [serializedClassifier [fileName]] }
 *  <p>
 *  If arguments aren't specified, they default to
 *  classifiers/english.all.3class.distsim.crf.ser.gz and some hardcoded sample text.
 *  If run with arguments, it shows some of the ways to get k-best labelings and
 *  probabilities out with CRFClassifier. If run without arguments, it shows some of
 *  the alternative output formats that you can get.
 *  <p>
 *  To use CRFClassifier from the command line:
 *  </p><blockquote>
 *  {@code java -mx400m edu.stanford.nlp.ie.crf.CRFClassifier -loadClassifier [classifier] -textFile [file] }
 *  </blockquote><p>
 *  Or if the file is already tokenized and one word per line, perhaps in
 *  a tab-separated value format with extra columns for part-of-speech tag,
 *  etc., use the version below (note the 's' instead of the 'x'):
 *  </p><blockquote>
 *  {@code java -mx400m edu.stanford.nlp.ie.crf.CRFClassifier -loadClassifier [classifier] -testFile [file] }
 *  </blockquote>
 *
 *  @author Jenny Finkel
 *  @author Christopher Manning
 */

public class Entities {
	static BufferedWriter buff_out=null;
	
	
	public static String parse_json() throws ClassCastException, ClassNotFoundException, IOException{
		String token=null;
		  String serializedClassifier = "english.all.3class.distsim.crf.ser.gz";
		   
		   
		//   f1.getProperty("english.all.3class.distsim.prop");
		
		  
		  
		  //NERFeatureFactory cdc = new NERFeatureFactory("fl");
		  AbstractSequenceClassifier<CoreLabel> classifier = CRFClassifier.getClassifier(serializedClassifier);
		 /* CRFClassifier  cf=new CRFClassifier.
		CRFClassifier*/
		/*  classifier.flags.normalize=true;
		  classifier.flags.useNGrams=true;
		  classifier.flags.normalizeTerms=true;
		  classifier.flags.maxNGramLeng=4;
		  classifier.flags.intern=true;
		  classifier.flags.sigma=3;
		  classifier.flags.useClassFeature=true;
		  classifier.flags.tolerance=1e-4;*/
		 try {
				
			// buff_out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("output.txt")));
			 BufferedReader reader = null;
			 reader = new BufferedReader(new FileReader("files/tweet.json"));
		        Gson gson = new GsonBuilder().create();
		        JsonParser jp = new JsonParser();
		        JsonElement root = jp.parse(reader);
		     	Tweet[] tweet = gson.fromJson(root.getAsJsonArray(), Tweet[].class);
		   		JsonArray array = root.getAsJsonArray(); 
		  		int len= tweet.length;
		  		System.out.println("len is"+len);
		        FileWriter jsonFileWriter = new FileWriter("files/entities.json");
		        JsonArray newarray = new JsonArray();
		       	int i=0;
		        while(i<len){
		        	 JsonArray Location = new JsonArray();
				     JsonArray People = new JsonArray();
				     JsonArray Organizaton = new JsonArray();
				     String text = "";
				     if(tweet[i].lang.equals("en"))
				    	 text=tweet[i].text_en;
				     else if(tweet[i].lang.equals("ru")) 
				    	 text=tweet[i].text_ru;
				    else if(tweet[i].lang.equals("de"))
				    	 text=tweet[i].text_de;
				    	 else if(tweet[i].lang.equals("ar"))
				    		 text=tweet[i].text_ar;
				    		 else if(tweet[i].lang.equals("fr"))
				    			 text=tweet[i].text_fr;
				    	 
		        	
		        		
		        		if(text.length()>0){
		        	
		        	token= text;
		       		List<List<CoreLabel>> out = classifier.classify(token);
		       for (List<CoreLabel> sentence : out) {
		           for (CoreLabel word : sentence) {
		             //System.out.println(word.word() + ":"+ word.get(CoreAnnotations.AnswerAnnotation.class) + ' ');
		          
		             if(word.get(CoreAnnotations.AnswerAnnotation.class).toString().equals("LOCATION")){
		            	 JsonElement element = gson.fromJson (word.word().toString(), JsonElement.class);
		            	 //String regex = "(\"position\":)\"([^\"]*)\"";
		            	// System.out.println(json.replaceAll(regex, "$1$2"));
		            	// System.out.println(new JsonPrimitive("loc"+word.word().toString()));
		            	 Location.add(new JsonPrimitive(word.word().toString())); 
		            	 
		             }
		             if(word.get(CoreAnnotations.AnswerAnnotation.class).toString()=="ORGANIZATION"){
		            	 JsonElement element = gson.fromJson (word.word(), JsonElement.class);
		            	 Organizaton.add(new JsonPrimitive(word.word().toString()));	 
		            	 
		             }
		             
		             if(word.get(CoreAnnotations.AnswerAnnotation.class).toString()=="PEOPLE"){
		            	 JsonElement element = gson.fromJson (word.word(), JsonElement.class);
		            	 People.add(new JsonPrimitive(word.word().toString()));	 
		            	 
		             }
		             
		             
		            
		           }
		       }
		         
		           JsonObject j = (JsonObject) array.get(i);
		   // j.add("Entity_Organizaton", new JsonPrimitive("hello"));
		          j.add("Entity_Organizaton",Organizaton);
		           j.add("Entity_Location",Location);
		           j.add("Entity_People",People);
		           newarray.add(j);
		           
		        
		         //  System.out.println("i "+i+" array" +newarray.get(i));
		          
		        	}
		        	
		        	
		       
		      
		        
		        /*List<Triple<String, Integer, Integer>> list = classifier.classifyToCharacterOffsets(token);
		        for (Triple<String, Integer, Integer> item : list) {
		      //  System.out.print(word.word() + '/' + word.get(CoreAnnotations.AnswerAnnotation.class) + ' ');
		          System.out.println(item.first() + " hello : " + token.substring(item.second(), item.third()));
		        }*/
		       i++;
		        
		        }
		        jsonFileWriter.write(newarray.toString());
			       jsonFileWriter.close();
		       // }
		        //buff_out.close();
		 
		 }
	   catch(FileNotFoundException fp) {
	        
	    }
		 catch(IOException ex){
			 
		 }
		return token;
	}

  public static void main(String[] args) throws Exception {
	  parse_json();
      // This prints out all the details of what is stored for each token
      

}
}