import re
   
o = open("fileOdd.json","w")   
data = open("dataOdd.json").read()
data.replace("{\"key\":","")  
temp = data.replace("{\"key\":","")
temp.replace(",\"value\":null}","")
o.write(temp.replace(",\"value\":null}",""))
o.close()