import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

    constructor(
  	    public navCtrl: NavController,
  	    public alertCtrl: AlertController,
  	    public actionSheetCtrl: ActionSheetController) {}
  
    ngOnInit(){

    }

 	private showAlert() {
	    let alert = this.alertCtrl.create({
	        title: 'New Friend!',
	        subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
	        buttons: ['OK']
	    });
    	alert.present();
    }
	private presentActionSheet() {
	    let actionSheet = this.actionSheetCtrl.create({
	        title: '哇！我是样式表',
	        buttons:[
		        {
		            text: '我喜欢',
		            role: 'destructive',
		            handler: () => {
		       //      	let navTransition = actionSheet.dismiss();
	        //     	    someAsyncOperation().then(() => {
					    //     navTransition.then(() => {
					    //       this.nav.pop();
					    //     });
				    	// });
				    	// return false;
		            }
		        },{
		            text: '拒绝',
		            handler: () => {
		            	console.log('Archive clicked');
		            	this.showAlert()
		            }
		        },{
		            text: '取消',
		            role: 'cancel',
		            handler: () => {
		            	console.log('Cancel clicked');
		            }
		        }
	        ]
	    });
	    actionSheet.present();
	  }
}
