
//Classe Abstrata:
class Animal {
    constructor(nome) {
        this.nome = nome;
        }
    
        
        fazerBarulho() {
        throw new Error("Método abstrato não implementado");
        }
    
        
        comer() {
        console.log(`${this.nome} está comendo`);
        }
    }
    //Classe Herdeira 1:
    class Cachorro extends Animal {
        constructor(nome) {
            super(nome);
            }
        
            fazerBarulho() {
            console.log(`${this.nome} está latindo`);
            }
        }
        // Classe Herdeira 2:
        class Gato extends Animal {
            constructor(nome) {
                super(nome);
                }
            
                fazerBarulho() {
                console.log(`${this.nome} está miando`);
                }
            }
            // Instâncias de Objetos:
            const rex = new Cachorro("Rex");
            const felix = new Gato("Felix");
            const tom = new Gato("Tom");
            
            rex.comer(); 
            rex.fazerBarulho(); 
            
            felix.comer(); // 
            felix.fazerBarulho(); 
            
            tom.comer(); 
            tom.fazerBarulho(); 