# ===> Pet class
# Task #1
class Pet(object):
    def __init__(self,name,species,food_cost,noise):
        self.name=name
        self.species=species
        self.food_cost=food_cost
        self.noise=noise

# Task #2
    def Speak(self):
        print(self.noise)

petsList=[ Pet(name='Spot', species='dog', food_cost=5.00, noise='woof'),
          Pet(name='Fido', species='dog', food_cost=7.00, noise='woof'),
          Pet(name='Jorge', species='dog', food_cost=2.00, noise='yip') ]
petsListNew=[]

# Task #3
def sumFoodCost(list1):
    sum=0
    for pet in list1:
        sum+=pet.food_cost

    return("The sum of the food_cost is: " + str(sum))    

sumFoodCost(petsList)
          
# Task #4
def whatDogsSay(list2):
    for i in list2:
        petsListNew.append("The " + i.species +  " says " + i.noise)

    return petsListNew 

whatDogsSay(petsList)       
print("======== END Tasks =========")

# Rinning the 'Speak()' method with the 'pet1' class instance
print("===== Running sample test bellow! =======")
pet1=Pet("aaa","dog","11","baaaaaaaab..")
pet1.Speak()

  


    

       


   


     
            

       

           

