import re
   
o = open("file.json","w")   
data = open("data.json").read()
data.replace("{\"key\":","")  
temp = data.replace("{\"key\":","")
temp.replace(",\"value\":null}","")
o.write(temp.replace(",\"value\":null}",""))
o.close()