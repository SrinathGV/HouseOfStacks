package content_tagging;

public class Tweet {
public String text_en;
public String text_ru;
public String text_de;
public String text_ar;
public synchronized String getText_ru() {
	return text_ru;
}


public synchronized void setText_ru(String text_ru) {
	this.text_ru = text_ru;
}


public synchronized String getText_de() {
	return text_de;
}


public synchronized void setText_de(String text_de) {
	this.text_de = text_de;
}


public synchronized String getText_ar() {
	return text_ar;
}


public synchronized void setText_ar(String text_ar) {
	this.text_ar = text_ar;
}


public synchronized String getText_fr() {
	return text_fr;
}


public synchronized void setText_fr(String text_fr) {
	this.text_fr = text_fr;
}


public String text_fr;

public synchronized String getLang() {
	return lang;
}


public synchronized void setLang(String lang) {
	this.lang = lang;
}


public String id;
public String lang;

public synchronized String getDocid() {
	return id;
}


public synchronized void setDocid(String id) {
	this.id = id;
}


public String getText_en() {
	return text_en;
}


public void setText_en(String text_en) {
	this.text_en = text_en;
}


public String toString() {
    return "tweet{" + "text_en" + text_en + 
    	'}';
}
}
