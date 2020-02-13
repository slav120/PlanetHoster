


// Question 4 

// Ils servent a apporter divert fonctionnalite utile dans notre code (aplication) que l'on peut simplement appeler et les utiliser. 
// Helpers en Ruby (Gems, on peut voir nos Gems installer dans Gemfile), Modules en Javascript on peut voir ce que l'on a dans Package.json. Ils sont la a nous simplifier le codage, et ajouter de la complexite dans notre application/code.   


// Question 6 

// Les ressources sont les chemins que notre code doit prendre, l'action (cheminement) qu'il doit prendre, c'est les actions que l'on veut prendre envers notre serveur, ce que l'on veut faire. ( ex: on veut GET /users/new  qui est le chemin a suivre a suivre pour atteindre cette information) 



// Question 9

// (Javascipt)

// Ceci est la fonction que j'utiliserait pour valider une addresse IP

// function ValidateIPaddress(ipaddress) {  
//   if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
//     return (true)  
//   }  
//   alert("You have entered an invalid IP address!")  
//   return (false)  
// }  

// Il n'y a pas de probleme avec la verification d'une adresse valide (ex 256.0.0.1) car la fonction retournera False si les premiers chiffres de l'addresse sont au dessu de 255, il n'y a aucune adresse ayant le premier chiffre audessus de 255. Elle verifiera aussi bien les point et indentation des autres chiffres apres les points.  



// Question 10

// le form_tag est un helper simple qui génére uniquement le tag form. Tandis que le form_for prend un model en paramètre et génère tag form, il se mappe sur le model et fourni un builder qui permettra de générer les tag input sur les attributs du model.


// Question 11 

// L'erreur de unpermited parameters arrive car on accede mal a l'objet, on peut aussi avoir ajouter de l'information a une parametre qui n'existe simplement pas (des erreur d'ecriture etc). ou peut etre il n'a simplement pas acces a ces parametre la. On peut le laisser les acceder avec params.permit, qui est ce que les gens fesaient pour regler cette erreur.  

// Pour le ActiveModel:: ForbiddenAttributesError dans le passer il fallait mettre params.require pour laisser Rails comprendre que nous avons besoins de cette parametre, il donne cette erreur car on a pas inscrit require apres le params, dans les nouvelles versions de rails on a pas besoin de mettre require, il comprend tout seul. 

