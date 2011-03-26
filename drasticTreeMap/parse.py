import re
   
o = open("file.json","w")   
data = open("newData.json").read()
data.replace("{\"key\":","")  
temp = data.replace("{\"key\":","")
temp.replace("},\"value\"",",\"value\"")
o.write(temp.replace("},\"value\"",",\"value\""))
o.close()