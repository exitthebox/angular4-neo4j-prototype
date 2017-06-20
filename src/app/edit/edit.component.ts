import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// need something like this for fetching records from the neo4j database and loading them into an array
// onFetchNode()...

// onAddIngredient() {
//   (<FormArray>this.recipeForm.get('ingredients')).push(
//     new FormGroup({
//       'name': new FormControl(null, Validators.required),
//       'amount': new FormControl(null, [
//         Validators.required,
//         Validators.pattern(/^[1-9]+[0-9]*$/)
//       ])
//     })
//   );
// }

//need something like this to load the array of fetched neo4j nodes and relationships to display on the form
// private initForm() {
//   let recipeName = '';
//   let recipeImagePath = '';
//   let recipeDescription = '';
//   let recipeIngredients = new FormArray([]);

//   if (this.editMode) {
//     const recipe = this.recipeService.getRecipe(this.id);
//     recipeName = recipe.name;
//     recipeImagePath = recipe.imagePath;
//     recipeDescription = recipe.description;
//     if (recipe['ingredients']) {
//       for (let ingredient of recipe.ingredients) {
//         recipeIngredients.push(
//           new FormGroup({
//             'name': new FormControl(ingredient.name, Validators.required),
//             'amount': new FormControl(ingredient.amount, [
//               Validators.required,
//               Validators.pattern(/^[1-9]+[0-9]*$/)
//             ])
//           })
//         );
//       }
//     }
//   }

//this is the group of fields that will be repeated on the HTML form for each neo4j node/relationship returned
//   this.recipeForm = new FormGroup({
//     'name': new FormControl(recipeName, Validators.required),
//     'imagePath': new FormControl(recipeImagePath, Validators.required),
//     'description': new FormControl(recipeDescription, Validators.required),
//     'ingredients': recipeIngredients
//   });
// }

}
