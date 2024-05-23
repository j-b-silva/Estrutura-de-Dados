function LinkedList(){
    let length = 0;
    let head = null; 

    let Node = function(element){
        this.element = element; 
        this.next = null; 
    };
    


    this.append = function(element){
        const node = new Node(element);
        let current = null;
        if (head===null){
            head = node;
        } else{
            current = head;
            while(current.next){
                current = current.next;
            }
        current.next = node;
        }
        length++;
    };
    
    this.insert = function(position, element){
        if(position >= 0 && position <= length){
            let node = new Node (element),
                current = head,
                previous,
                index = 0;
            if (position === 0){
                node.next = current;
                head = node;
            } else {
                previous = this.getElementAt(position - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
            }
            length++;
            return true       
        } else{
            return false;  
        }
    };
    
    this.getElementAt = function(position){
        if(position >= 0 && position <= this.size()){
            let node = head;
            for(let i=0;((i < position) && (node != null)); i++){
                node = node.next
            }
            return node;
        }
        return undefined;
    };
    
    this.remove = function (element){
       let index = this.indexOf(element);
       return this.removeAt(index);
    };
    
    this.removeAt = function(position){
        if(position > -1 && position < length){
            let current = head,
            previous;
            if(position === 0){
                head = current.next;
            } else{
                previous = this.getElementAt(position -1);
                current = previous.next;
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    
    this.indexOf = function(element){
       let current = head;
       let index = 0;
       while(current){
        if(element === current.element){
            return index;
        }
        index++
        current = current.next;
       }
       return -1;
    };
    
    this.isEmpty = function(){
        return length === 0 ;
    };
    
    this.size = function(){
        return length;
    };
    
    this.getHead = function(){
       return head;
    };
    this.toString = function(){
       let current = head;
       let string = ' ';
       while (current){
        string += current.element + (current.next ? ' -> ': ' ');
        current = current.next;
       }
       return string;
    };
};

let listaEncadeada = new LinkedList();

console.log("A lista 1 encadeada possui o conteudo: " + listaEncadeada.toString());

listaEncadeada.append('Luis');
listaEncadeada.append('Fabiana');
listaEncadeada.append('Marcos');
listaEncadeada.append('Gabriel');
listaEncadeada.append('Victor');
listaEncadeada.append('Ingrid');

console.log("A lista 2 encadeada possui: " + listaEncadeada.toString());

listaEncadeada.insert(3, 'julinha');
console.log("A lista 3 encadeada possui: " + listaEncadeada.toString());

listaEncadeada.insert(0, 'Calliari');
console.log("A lista 4 encadeada possui: " + listaEncadeada.toString());

listaEncadeada.removeAt(5);
console.log("A lista 5 encadeada: " + listaEncadeada.toString());

console.log("Iremos remover o: " + listaEncadeada.remove('Luis'))
console.log("A lista 6 encadeada: " + listaEncadeada.toString());

console.log("A lista encadeada possui " + listaEncadeada.size() + " elementos.");

console.log("O primeiro elemento da lista é: " + listaEncadeada.getHead().element + " que se encontra na posição: " 
+ listaEncadeada.indexOf(listaEncadeada.getHead().element));

listaEncadeada.remove('Calliari'); 
listaEncadeada.remove('Fabiana');  
listaEncadeada.remove('Marcos');  
listaEncadeada.remove('julinha');
listaEncadeada.remove('Victor');  

console.log('A lista encadeada está vazia? '+ listaEncadeada.isEmpty());  
console.log('A lista encadeada possui o conteúdo: '+ listaEncadeada.toString());

listaEncadeada.remove('Ingrid');  

console.log('A lista encadeada está vazia? '+ listaEncadeada.isEmpty());    
console.log('A lista encadeada esvaziada possui '+ listaEncadeada.size()+' elementos');


