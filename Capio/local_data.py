# pull content from saved file
import requests, json, datetime, time,math
from shutil import copyfile
from termcolor import colored

inFile="inWord.txt"
 
with open(inFile,"r") as f1: 
    allContent=f1.read()
 
jsonContent=json.loads(allContent)
# print(type(jsonContent))
# print(jsonContent[0])

# ===> extracting all elements 
for result in jsonContent:
    print("="*20 + " BEGIN Each Iteration " + "="*20 + "\n")
    print(result)
    print("-"*40 + "\n")
    for alternative in result["result"]:
        print(alternative["final"])
        print("-"*40 + "\n")
        print(alternative["alternative"])
        print("-"*40 + "\n")
        print(alternative["alternative"][0]["confidence"])
        print("-"*40 + "\n")
        print(alternative["alternative"][0]["transcript"])
        print("-"*40 + "\n")

        # Iterating trough 'words' list:
        print("-"*40 + " BEGIN 'words' list " + "-"*40 + "\n")
        print(" 'Words' is of type: " + str(type(alternative["alternative"][0]["words"])))

        wList1=[] # list to push <every_word>
        wDict={} # push the sentence length in it   
        for each_word in range(len(alternative["alternative"][0]["words"])):
            word_confidence=alternative["alternative"][0]["words"][each_word]["confidence"]
            every_word=alternative["alternative"][0]["words"][each_word]["word"]
            word_from=alternative["alternative"][0]["words"][each_word]["from"]
            word_to=alternative["alternative"][0]["words"][each_word]["from"]
            sentence_start=alternative["alternative"][0]["words"][0]["from"]
            sentence_end=alternative["alternative"][0]["words"][-1]["to"]
            sentence_length=sentence_end-sentence_start

            if word_confidence < 0.99:
                every_word=colored(alternative["alternative"][0]["words"][each_word]["word"],"red")
                print(every_word)
            else:
                print(every_word)
                         
            print(word_from)
            print(word_to)
            print("Sentence starts at: " + str(sentence_start))
            print("Sentence ends at: " + str(sentence_end))
            print("Sentence length is: " + str(sentence_length))

            
            # m, s = divmod(sentence_length, 60)
            # h, m = divmod(m, 60)
            # print("%d:%02d:%02d" % (h, m, s))
            if sentence_length>60:
                secs=sentence_length//60
            else:
                secs=sentence_length 
            minutes=math.floor(sentence_length//60)           
            hours=math.floor(minutes)
            secs_final="{:02}:{:02}:{:03.2f}" .format(hours,minutes,secs)
            secs_final_blue=colored(secs_final,"blue")
            print(secs_final_blue)

            wList1.append(every_word)
            wDict["secs_final"]=secs_final_blue
        
        print("-"*40 + " END 'words' list " + "-"*40 + "\n")
        print("-"*20 + " END Each Iteration " + "-"*20 + "\n")
    print(" ================ END RESULT ==============")
    print(" ".join(wList1))
    print(wDict["secs_final"])






    






