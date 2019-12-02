class Item extends Phaser.GameObjects.Sprite {
 constructor(scene, x, y, nome) {
     super(scene, x, y, nome);
 this.scene = scene;
 scene.physics.world.enable(this);
 scene.add.existing(this);
 
        this.setPosition(x, y);
        this.body.setCollideWorldBounds(true);
        //this.body.setOffset(16, 31);
        //this.body.setCircle(4);
        console.log(nome);
     if(nome == 'Lanterna'){
         this.alpha =.8;
         this.setTexture('lanterna');
         this.setScale(.5)
         
     }
        else if(nome=='Chave1'){
        this.setTexture('chave1');
            this.setScale(.4);
        }
     else if(nome=='Chave2'){
        this.setTexture('chave2');
            this.setScale(.4);
        }
     else if((nome == 'Nota')||(nome == 'Nota2')||(nome == 'Nota3')){
        this.setTexture('nota');
        this.setScale(.4)
     }
     else if(nome=='Diario'){
        this.setTexture('Diario');
        this.setScale(.4)
     }
     
 }
    preUpdate(time, delta) {
        super.preUpdate(time, delta);
    }

}