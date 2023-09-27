# BACKEND_TASK
BACKEND TASK FOR GDSC MPSTME
Hello, before i start explaining my code i would like to inform the judges that this was my actual directory 
![image](https://github.com/ArnavKaul/BACKEND_TASK/assets/121275829/1532c89b-bfd1-40d8-bf5d-fab0529b7287)

due to some errors i wasnt able to upload it in a very organized manner (apologies for that)

Anyways moving on to the explanation I've used the following tools for my project

Node js

Express

MongoDB

PART 1(FILE EXPLANATION)

![image](https://github.com/ArnavKaul/BACKEND_TASK/assets/121275829/f95d2f9e-1315-4530-99cd-9c0157586d41)
 
 this was the first js script I wrote where in I imported  the necessary modules -express(for middleware routing),mongoose(Mongodb database connection)
 Apart from that i created 
  Invoices.js and Invoicerouting.js
  items.js and itemsrouting.js

PART 2 (CODE EXPLANATION)

1.(ITEM.JS)
![image](https://github.com/ArnavKaul/BACKEND_TASK/assets/121275829/7f0cd138-e126-4506-864b-705de3b75357)

I've defined the schema  where in ill have 3 values -id, stock and price to be taken in consideration based on which i can perform the necessary CRUD operations 
Now I've got all the Item router(/s) defined  in the Itemrouter.js here so far I've defined  5 Routes 
![image](https://github.com/ArnavKaul/BACKEND_TASK/assets/121275829/9aaeb378-d7c4-4b34-aa1a-56129805ddd4)

![image](https://github.com/ArnavKaul/BACKEND_TASK/assets/121275829/b1732f1a-f00c-4ff3-8eca-40dad296cddc)

![image](https://github.com/ArnavKaul/BACKEND_TASK/assets/121275829/97e0e578-500f-42b6-9da3-b0fb05c3137b)


the first Route enables us to actually send  our data in json format  whereas the second and  third one returns back every and one item (based on the id) respectively
the last 2 routes are to update and delete a particular data set we wan.IN general Ive used try and catch wherever i could have throughout the code since its good practice 


Now ive got the invoices.js 
![image](https://github.com/ArnavKaul/BACKEND_TASK/assets/121275829/24386a11-2b9a-4b9a-a6d3-b56679d4de87)

Here the schema is based on total,invoice_id,and discount 

Coming to the final part - invoice calculation(this part was incomplete) (InvoiceRouter.js)
![image](https://github.com/ArnavKaul/BACKEND_TASK/assets/121275829/8532f642-dc76-495c-8084-f7bd1d227b97)

this part based on the  entry calculates the total price, price after taxes and discount on that price 












