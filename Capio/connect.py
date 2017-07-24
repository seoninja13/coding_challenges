# connect to the Capio API
import requests, json
from shutil import copyfile
 
response = requests.get("https://api.capio.ai/v1/speech/transcript/593f237fbcae700012ba8fcd",headers={"apiKey":"262ac9a0c9ba4d179aad4c0b9b02120a"})
response_txt=response.text
# print(response_txt)

inFile="inWord.txt"
with open(inFile,"wb") as f1:
    for chars in response_txt:
        allContent=f1.write(chars)


 





    






