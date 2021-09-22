class Speaker{
    hi(nombre : string){
        console.log(nombre);
    }
}

let listener: Speaker = new Speaker();
listener.hi("cesar");
