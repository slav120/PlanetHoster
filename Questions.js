
// Question 1 
//  Je vais creer une fonction que je vais appeler WordCount, elle va prendre comme parametre le string ou fichier que l'on veut, je vais retourner le fichier avec la fonction split sur tout les espace libre (" ") et ensuite faire .length pour retourner le nombre d'espace blanc, qui est le nombre de mots, 


// Je vais creer une fonction que je vais appeler WordCount, comme parametres elle va prendre le string donc je veut compter le nombre de mots. a l'interieur de cette fonction creer une variable WordNumber qui va etre egale a 0, ensuite creer une loupe tres simpliste sur tout le string que nous avons, avec un if statement simple, a chauqe fois qu'il voit un espace (" ") il va faire WordNumber +1, a la fin quand le string va finir on va simplement retourner WordNumber et nous allons avoir notre reponse. 


// Question 2  

// Je vais creer une fonction qui va prendre comme parametres le texte ou string qui nous ai donner, a l'interieur creer une constante qui sera un objet vide, je vais faire une premiere loop qui va passer a travers chaque chaque mots dans notre string, il va le prendre et l'egaler a une clee dans notre objet ayant une valeur de 0, apres qu'il ai fini avec cette loop, je vais faire une deuxieme loop qui va comparer chaque cle dans notre object a chaque mots dans notre string (texte) a chaque fois que les deux sont egale je vais faire +1 a la valeur de la cle precise. quand la deuxieme loop sera completer, je vais juste retourner notre objet ou le console.log et nous pourrons vois chaque clee (mots) avec sa valeur (nombre de fois il apparait). 


// Question 3
//  Premiere fonction retournera un integer (ex: 5) 
//  Deuxieme fonction retournera un object (ex:  {hello: 3, no: 5, this: 7}) etc.  


// Question 4 
// Ils servent a apporter divert fonctionnalite utile dans notre code (aplication) que l'on peut simplement appeler et les utiliser. 
// Helpers en Ruby (Gems, on peut voir nos Gems installer dans Gemfile), Modules en Javascript on peut voir ce que l'on a dans Package.json. Ils sont la a nous simplifier le codage, et ajouter de la complexite dans notre application/code.   


// Question 5  
// Nous  voulons seulement que les routes de register et login soit utiliser si logged_in est false et on veut juste utiliser la route de logout (destroy) si logged_in est true pour que l'on puisse se logout. Nous devons faire un simple if statement pour verifier si la reponse est true ou false, si le if est true cela veut dire qu'on est loged in et c'est seulement a ce moment que nous voulons permettre de logout. Quand loged in est false c'est la le seul moment que nous voulont laisser le possibiliter de ce log in ou de register un nouveau compte. J'utiliserai un simple if a&.logged_in == false  ou a&.logged_in == true  et je continuerait le code apres pour faire ce que je desire selon la situation. ( je pourrait aussi faire avec un try  if a.try(:logged_in) == false)



// Question 6 

// Les ressources sont les chemins que notre code doit prendre, l'action (cheminement) qu'il doit prendre, c'est les actions que l'on veut prendre envers notre serveur, ce que l'on veut faire. ( ex: on veut GET /users/new  qui est le chemin a suivre a suivre pour atteindre cette information) 


// Question 8 
// a et b  
//Cette fonction va stringify tout les cles des hash en strings, mais nous pouvons utiliser une maniere plus simple juste en utilisant hash.stringify_keys  qui est une fonction de Ruby qui nous fascilite la vie. Nous pouvons aussi faire l'inverse hash.symbolize._keys qui va rendre nos chars en cle. Il y a en bas les deux fonctions a ces buts.   
// 
// class ::Hash
//  def convertir_cle_en_chars
//   h = self.map do |k,v|
//   v_str = if v.instance_of? Hash
//      v.stringify_keys
//      else
//      v
//      end

//      [k.to_s, v_str]
//     end
//     Hash[h]
//   end
// 
// def convertir_char_en_cle
//   h = self.map do |k,v|
//   v_sym = if v.instance_of? Hash
//     v.symbol_keys
//      else
//         v
//         end

//         [k.to_sym, v_sym]
//         end
//         Hash[h]
//   end
// end

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


//  Question 12 

// a) Nous pouvons utiliser Apache, Nginx, Mongrel, Phusion Passenger, Unicorn, Thin, Puma, WEBrick, Trinidad, TorqueBox comme serveurs 

// b) 
// Nous pouvons utiliser Apache et Nginx qui sont des serveurs web qui sont la pour servir notre application / website ils font la communication http de notre browser avec notre client qui est notre serveur. Nous devons par contre les configurer dans notre serveur pour qu'ils marchent en conjonction. 

// Mongrel, Puma, Unicorn, Thin, Phusion Passenger sont tous des "applications servers" qui charge notre Ruby app a l'interieur de eux meme en utlisant les propre espace interne,  en utilisant un web socket nous pouvons les faire communiquer avec le browser. Ces serveurs ce chargent de convertir et transmettre l'information de notre Ruby app a reponse HTTP au Web socket qui est l'entre deux entre l'application server et l'internet (browser). 

//  Chaque serveur est different, chacun supporte differente fonctionnalite, sert a different but, tout depend de la situation dans laquel on est pour savoir lequel utiliser.

// c) 


//  Question 14 

// a) Les valeurs false dans ruby sont 'nil' et un boulean 'false' 
  //  les valeurs en ruby qui retoure vrai (true) sont tous les chiffres (incluant 0), un empty string, hash et array sans rien. 

// b) La methode try nous aide a simplifier notre code un peu, il nous permet t'utiliser des methodes sur un objet sans avoir peur que la reponse qui nous revien soit nil, bref comme la fonction est nomme elle s'essaye pour voir la valeur de l'objet, si il n'est pas nil la fonction continue, exemple dans un if statement, il va s'essaye si c'est true il va continue sinon il va skip. 

// c) Blank veut dire que un objet, array,  hash ou string est vide, il est present mais il contient rien. (une whitespace compte        comme blank dans un string).
//    
// Present veut dire qu'il y a qqchose dans un string, objet, hash ou array, c'est l'oppose de blank, quelque chose y est             present. (un whitespace dans un string compte comme present)

//  Presence va retourne l'information a l'interieur de notre requete si elle est presente ou existante (un whispace compte pas) ex dans un object, array, etc, si il n'y a rien il va nous redonner nil. 



// Question 15 

//  Non ceci ne va pas executer le SQL statement immediatement, il a des fautes dans le code, il ne va pas 'run' les "" doivent se situer juste a l'entour de ce que l'on veut chercher de concret ex. on veut qu'il ai 17 ans Student.where(age: "17").take 
//  Il faut aussi mettre les : apres le parametre du tableau ex nom, age, poids etc. 
// Il faut aussi mettre .take pour recevoir cette information, on peut aussi mettre LIMIT 2 pour avoir exemple, les deux premier etc. 

//  Nous devons faire 
//  Student.where(name: "?").take 

// Nous pouvons aussi faire la facon sql querry direct (plus longue et compliquer que la facon Active object)

// def search 
// ActiveRecord::Base.connection.execute("SELECT * FROM students WHERE students.name = '?'; ")
// end


//  Question 16 
//  Si on utilise join dans students dans join(:classroom) nous allons joindre les tables de students et de classroom, toute l'information va y etre presente dans un seul tableau et nous pourrons l'utiliser et la gere comme on veut. mais si on a un loop par exemple un nouveau querry sera fait pour pouvoir faire l'association de l'information, dont utilise beaucoup de ressources de notre systeme pour rien.  

// Dans le cas de includes la querry va une fois faire le querry pour retrouver l'information dans le SQL mais il le fera une fois car apres il n'aura pas de faire l'association il va juste aller chercher l'information une par une dans les deux tableaux. 
//  


// Question 17 
// a)
// Ce qui arrive c'est que l'on fait des "nested modules" on ajoute un niveau de complexiter a notre code. Ceci nous sert a organiser notre code, exemple on va nester le certains modules ensemble si par exemple on utilise cette partie du code juste la. Ruby aussi va en premier chercher l'infmation dans le module le plus interne et nested et apres vers les plus externes et ainsi de suite. On fait aussi juste renforcer le lien encore plus entre les deux modules.  

// b) 
// Notre terminal vas imprimer (puts, console.log) 
// *manger vite* 
// *manger trop*
// *mmm, c'etait bon* 
//  le output sinon de tout sa sera de nil 

// c) La methode etendre ajoute le module specifie dans une classe specifique dans cete instance, c'est juste ici que l'on peut l'utiliser et non dans aucune autre instance de la meme dite classe. 

//  la methode inclure ajoute le module que l'on a specifie dans la classe, le module sera maintenant present dans chacune des autres instances de cette classe et l'on pourra l'utiliser dans les autres instances. 

// d) 
// Le singleton est une classe ayant qu'une seule instance, il permet de restreindre la duplication de cette classe a un seul objet dans tout notre code.


// Question 18  
