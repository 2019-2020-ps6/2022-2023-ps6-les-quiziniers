import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  public quiz: Quiz;
  public quizForm: FormGroup;

  constructor(public formBuilder: FormBuilder,private route: ActivatedRoute, private quizService: QuizService) {
    this.quizService.quiz$.subscribe((quiz: Quiz) => {
      this.quiz = quiz;
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id)
    this.quizForm = this.formBuilder.group({
      name: [this.quiz.name],
      image: [this.quiz.image]
    });
  }


  updateQuiz():void{
    const quizToUpdate: Quiz = this.quizForm.getRawValue() as Quiz;
    const quizUp:Quiz=this.quiz
    quizUp.name=quizToUpdate.name
    quizUp.image=quizToUpdate.image
    this.quizService.updateQuiz(quizUp)

  }



}
