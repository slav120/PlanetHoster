
// Question 1 

// Je vais créer une fonction que je vais appeler WordCount, elle va prendre comme paramètre le string ou fichier que l'on veut, je vais retourner le fichier avec la fonction split sur tout les espace libre (" ") et ensuite faire .length pour retourner le nombre d'espace blanc, qui est le nombre de mots, 

// OU  

// Je vais créer une fonction que je vais appeler WordCount, comme paramètres elle va prendre le string donc je veux compter le nombre de mots,  l'interieur de cette fonction crée une variable WordNumber qui va être égale à 0, ensuite créer un loop très simpliste sur tout le string que nous avons, avec un if statement simple, a chaque fois qu'il voit un espace (" ") il va faire WordNumber +1, a la fin quand le string va finir on va simplement retourner WordNumber et nous allons avoir notre réponse. 


// Question 2  

// Je vais créer une fonction qui va prendre comme paramètres le texte ou string qui nous ai donner, a l'interieur creer une constante qui sera un objet vide, je vais faire un premier loop qui va passer à travers chaque chaque mots dans notre string, il va le prendre et l'égaler a une clef dans notre objet ayant une valeur de 0, après qu'il ai fini avec cette loop, je vais faire une deuxième loop qui va comparer chaque clé dans notre objet a chaque mots dans notre string (texte) a chaque fois que les deux sont égale je vais faire +1 a la valeur de la clé précise. quand la deuxième loop sera complété, je vais juste retourner notre objet et nous pourrons voir chaque clee (mots) avec sa valeur (nombre de fois il apparaît). 


// Question 3

// La première fonction retourne un integer (ex: 5) 
// La deuxième fonction retournera un objet (ex:  {bonjour: 3, tu: 5, je: 7}) etc.  


// Question 4 

// Ils servent à apporter divers fonctionnalite (fonctions, ex CookieParser, Bcrypt, Salt, etc) utile dans notre code (application) que l'on peut simplement appeler et les utiliser. 
// Helpers en Ruby (Gems, on peut voir nos Gems installer dans Gemfile), Modules en Javascript on peut voir ce qu'on a dans package.json. Ils sont la a nous simplifier le codage, et ajouter de la complexité dans notre application/code.(exemple encrypter des cookies)   


// Question 5  

// Nous  voulons seulement que les routes de register et login soit utiliser si logged_in est false et on veut juste utiliser la route de logout (destroy) si logged_in est true pour que l'on puisse se logout. Nous devons faire un simple if statement pour vérifier si la réponse est true ou false, si le if est true cela veut dire qu'on est logged in et c'est seulement a ce moment que nous voulons permettre de logout. Quand logged in est false c'est la le seul moment que nous voulons laisser le possibiliter de ce log in ou de register un nouveau compte. J'utiliserai un simple if a&.logged_in == false  ou a&.logged_in == true  et je continuerait le code après pour faire ce que je désire selon la situation. ( je pourrais aussi faire avec un try  if a.try(:logged_in) == false)



// Question 6 

// Les ressources sont les chemins que notre code doit prendre, l'action (cheminement) qu'il doit prendre, c'est les actions que l'on veut prendre envers notre serveur, ce que l'on veut faire. ( ex: on veut GET /users/new  qui est le chemin a suivre a suivre pour atteindre cette information) Ou on veut POST sur cette route pour envoyer de l'information vers notre database par exemple, tout dépend du chemin et l'action qu'on veut accomplir.  


// Question 7 

// class Node
//   # @param value [Integer]
//   # @param next [Node]
//   def initialize(value, next)
//     @value = value
//     @next = next
//   end
// end

// class LinkedList
//   attr_reader :first_node
//   attr_reader :current_node



// # @params values [Array<Integer>]
//     def initialise(*values)
//       list = LinkedList.new
//       list.append(1)
//       list.append(2)
//       list.append(3)
//       list.append(5)
//       list.append(8)
//       list.append(13)  
//     end 

//  Nous allons simplement apprend les valeurs que l'on veut dans notre liste avec .append 


// Question 8 
// à) et b)   

// Cette fonction va stringify tout les clés des hash en strings, mais nous pouvons utiliser une manière plus simple juste en utilisant hash.stringify_keys qui est une fonction de Ruby qui nous facilite. Nous pouvons aussi faire l'inverse hash.symbolize_keys qui va rendre nos strings en cle. Il y aussi en bas les deux fonctions a ces buts que la question voulait.    

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
// (Javascript)

// Ceci est la fonction que j'utiliserai pour valider une adresse IP

// function ValidateIPaddress(ipAddress) {  
//   if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {  
//     return (true)  
//   }  
//   alert("You have entered an invalid IP address!")  
//   return (false)  
// }  

// Il n'a pas de problème avec la vérification d'une adresse invalide (ex 256.0.0.1) car la fonction retournera False si les premiers chiffres de l'adresse sont au dessus de 255, il n'y a aucune adresse ayant le premier chiffre au dessus de 255. Elle vérifiera aussi bien les point et numéro des autres chiffres apres les points.  


// Question 10

// le form_tag est un helper simple qui génère uniquement le tag form. Tandis que le form_for prend un model en paramètre et génère tag form, il se mappe sur le modèle et fournit un builder qui permettra de générer les tag input sur les attributs du modèle.


// Question 11 

// L'erreur de unpermitted parameters arrive car on accède mal a l'objet, on peut aussi avoir ajouter de l'information a une parametre qui n'existe simplement pas (des erreur d'écriture etc). ou peut etre il n'a simplement pas accès a ces parametre la. On peut le laisser les acceder avec params.permit, qui est ce que les gens faisaient pour régler cette erreur dans le passé.   

// Pour le ActiveModel:: Forbidden AttributeError dans le passer il fallait mettre params.require pour laisser Rails comprendre que nous avons besoins de ce paramètre, il donne cette erreur car on a pas inscrit require après le params, dans les nouvelles versions de rails on a pas besoin de mettre require, il le comprend tout seul. 


//  Question 12 

// a) Nous pouvons utiliser Apache, Nginx, Mongrel, Phusion Passenger, Unicorn, Thin, Puma, WEBrick, Trinidad, TorqueBox comme serveurs 

// b) Nous pouvons utiliser Apache et Nginx qui sont des serveurs web qui sont la pour servir notre application / website ils font la communication http de notre browser avec notre client qui est notre serveur. Nous devons par contre les configurer dans notre serveur pour qu'ils marchent en conjonction. 

// Mongrel, Puma, Unicorn, Thin, Phusion Passenger sont tous des "applications servers" qui charge notre Ruby app a l'intérieur d'eux même en utilisant les propre espace interne,  en utilisant un websocket nous pouvons les faire communiquer avec le browser. Ces serveurs se chargent de convertir et transmettre l'information de notre Ruby app a réponse HTTP au Web socket qui est l'entre deux entre l'application serveur et l'internet (browser). 

// Chaque serveur est différent, chacun supporte différente fonctionnalité, sert a different but, tout dépend de la situation dans laquel on est pour savoir lequel utiliser.

// c) server S1a
//    Sla 1 requête 
//    Slb 1 requête 
//    Slc et Sld 0 requetes 


//  serveur S2a 
//  s2a 1 requête 
//  s2b 1 requête 
//  s2c, s2d, s1a, s1b, 0 requetes 

//  Chaque 'worker' peut compléter une requête à lui même, alors les deux premiers prennent toujours les 2 requêtes et le reste des workers n'on aucune requete a accomplir, ils sont en attente de requêtes. Chaque serveur a 4 workers donc si il y a deux requêtes seulement deux peuvent les accomplies et les autres attendent. 


//  Question 14 

// a) Les valeurs false dans Ruby sont 'nil' et un boolean 'false' 
//    les valeurs en Ruby qui retournent vrai (true) sont tous les chiffres (incluant 0), un empty string, hash et array sans rien, un empty object, string, object, hash.  

// b) La méthode try. nous aide à simplifier notre code un peu, il nous permet d'utiliser des méthodes sur un objet sans avoir peur que la réponse qui nous revient soit nil, bref comme la fonction est nommée elle s'essaye pour voir la valeur de l'objet, si il n'est pas nil la fonction continue, exemple dans un if statement, il va s'essaye si c'est true il va continuer sinon il va pas faire la fonction. 

// c) Blank veut dire que un objet, array,  hash ou string est vide, il est présent mais il contient rien. (une whitespace compte comme blank dans un string).
   
// Present veut dire qu'il y a qqchose dans un string, objet, hash ou array, c'est l'opposé de blank, quelque chose y est présent. (un whitespace dans un string compte comme présent)

// Présence va retourne l'information à l'intérieur de notre requête si elle est présente ou existante (un whitespace compte pas) ex dans un object, array, etc, si il n'y a rien il va nous redonner nil, si il y a quelque chose par exemple il va nous redonner cette information. (on utilise typiquement try dans un hash ou dans un objet)  



// Question 15 

//  Non ceci ne va pas exécuter le SQL statement immédiatement, il a des fautes dans le code, il ne va pas 'run' les "" doivent se situer juste a l'entour de ce que l'on veut chercher de concret ex. on veut tous les étudiants ayant 17 ans Student.where(age: "17").take 
//  Il faut aussi mettre les : apres le paramètre du tableau ex nom, âge, poids etc. 
// Il faut aussi mettre .take pour recevoir cette information, on peut aussi mettre LIMIT 2 pour avoir par exemple, les deux premier car .take nous redonne tout.  

//  Nous devons faire 
//  Student.where(name: "?").take 

// Nous pouvons aussi faire la façon sql query directe (plus longue et compliquée que la façon Active object)

// def search_name
// ActiveRecord::Base.connection.execute("SELECT * FROM Student WHERE name = '?'; ")
// end


// Question 16 

// Si on utilise join dans students,  join(:classroom) nous allons joindre les tables de students et de classroom, toute l'information va y être présente dans un seul tableau et nous pourrons l'utiliser et l'accéder comme on veut. mais si on a un loop par exemple un nouveau querry sera fait pour pouvoir faire l'association de l'information a chaque fois pour que l'on puisse acceder, dont utilise beaucoup de ressources de notre système pour rien. Sinon pour un querry simple, unique cette façon nous permet d'accéder plus facilement a l'information dans multiple tableaux avec multiples joins.   

// Dans le cas de includes la querry va une fois faire le querry pour retrouver l'information dans le SQL mais il le fera une fois car après il n'aura pas de faire l'association il va juste aller chercher l'information une par une dans les deux tableaux et les remets ensemble après. (cela nous permet de réduire les ressources utilisé par notre système, si il y a un loop qui va régulièrement querry a chaque fois avec un join.) 
 
// La situation dicte  si on utilise un Join ou un Includes, pour optimiser la performance et l'efficacité. 


// Question 17 

// à) Ce qui arrive c'est que l'on fait des "nested modules" on ajoute un niveau de complexité a notre code. Ceci nous sert à organiser notre code, exemple on va nester le certains modules ensemble si par exemple on utilise cette partie du code juste la. Ruby aussi va en premier chercher l'information dans le module le plus interne et nested et après vers les plus externes et ainsi de suite. Ce qui nous aide a optimiser la performance de notre code. On fait aussi juste renforcer le lien encore plus entre les deux modules qui sont 'nested'.  

// b) Notre terminal vas imprimer (puts, console.log) 
// *manger vite* 
// *manger trop*
// *mmm, c'etait bon* 
// le output sinon de tout ça sera de nil 

// c) La méthode 'extend' ajoute le module spécifique dans une classe spécifique dans cette instance, c'est juste ici que l'on peut l'utiliser et non dans aucune autre instance de la même dite classe. 

// la méthode include ajoute le module que l'on a spécifié dans la classe, le module sera maintenant présent dans chacune des autres instances de cette classe et l'on pourra l'utiliser et d'accéder dans les autres instances de cette classe. 

// d) Le singleton est une classe ayant qu'une seule instance, il permet de restreindre la duplication de cette classe a un seul objet dans tout notre code.


// Question 18  

// Class Admin < ActiveRecord::Base 

//   POST
//   def create_or_update
//   if a&.Utils.is_admin? == true
//    ( ici nous allons utiliser utils.log_admin_activity pour créer les logs dans les bases de donnes, si il a changer les modèles ou en a creer des neufs c'est ce que nous voulons créer ou ajouter dans notre base de données) 
//   end 
//   end 

//   DELETE
//   def destroy 
//   if a&.Utils.is_admin? == true
//   Utils.log_admin_activity[:data] = nil 
//   end 
//   end 

// Dans le create (post) nous voulons vérifier grâce a Utils.is_admin? si c'est true, si c'est le cas cela veut dire que c'est un admin et quelqu'un qui a modifier des modèles, nous allons suivre cette route pour create ou update dans notre base de donnée, en premier on va vérifier si cela existe dans la base, si cela existe déjà, nous allons update en ré écrivant par dessus avec Utils.log_admin_activity qui la mettra à jour. Si ce log n'existe pas nous allons simplement en créer un avec les données qui se trouve dans Utils.log_admin_activity. ( il pourrait aussi comparer les résultat et changer les valeurs différentes dans la base de données mais cela sera beaucoup plus lent que en les ré écrivant, mais ça serait la manière appropriée de le faire selon moi) 
  
// Dans le destroy (delete) nous voulons en premier bien évidemment vérifier si la personne est un admin ou non avant de lui donner le droit d'effacer l'information dans notre base de données. Si cela est le cas et il veut Delete nous allons simplement rendre les données dans cette clé, log de donne Nil pour efface l'information. 

// Nous pouvons utiliser validates: Utils.is_admin?: true  en haut juste avant de faire les fonctions (def) dans la Classe pour pouvoir nous assurer que tout les fonctions à l'interne fonctionne seulement si c'est un admin, ou en if statements dans chaque fonction dans la classe.
// J’ai répondu à la question 18 du mieux que je pouvais, je l’est pas trouver très claire, j’ai essayé multiples sources pour trouver un éclaircissement. Je comprend qu’il faut demander des questions et je suis très curieux de savoir votre réponse sur celle-ci.    
