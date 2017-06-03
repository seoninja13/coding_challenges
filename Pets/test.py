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

# Task #3
    def sumFoodCost(self):
        sum=0
        for pet in petsList:
            sum+=pet.food_cost
        print(sum)    

petsList=[ Pet(name='Spot', species='dog', food_cost=5.00, noise='woof'),
          Pet(name='Fido', species='dog', food_cost=7.00, noise='woof'),
          Pet(name='Jorge', species='dog', food_cost=2.00, noise='yip') ]
petsListNew=[]
           
# Task #4
for i in petsList:
    petsListNew.append('The dog says ' + i.noise)

for k in petsListNew:
    "".join(k)

print(petsListNew)
print("======== END Tasks =========")

# Rinning the 'Speak()' and 'sumFoodCost()' methods with the 'pet1' class instance
print("===== Running sample test bellow! =======")
pet1=Pet("aaa","dog","11","baaaaaaaab..")
pet1.Speak()
pet1.sumFoodCost()
  