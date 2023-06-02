import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public visibility : String ="hidden"
  @Input()
  quiz?: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  editQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  deleteQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();



  ngOnInit(): void {
    const admin= sessionStorage.getItem("admin?")
    AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
    this.ctx = new AudioContext();
    if(sessionStorage.getItem("admin?")=="true"){
      this.visibility = "visible";
    }else {
      this.visibility = "hidden";
    }
  }



  selectQuiz(): void {
      this.quizSelected.emit(true);
  }

  edit(): void {
    this.editQuiz.emit(this.quiz);
  }

  delete(): void {
    this.deleteQuiz.emit(this.quiz);
  }
  quizTitle: string;
  tracks: any[];
  currentTrackIndex: number;
  currentTrackSrc: string;
  currentOptions: string[];
  numTracks: number;
  score: number;
  quizComplete: boolean;

  constructor(private quizService: QuizService) { }

  private ctx: AudioContext;

  playSound() {

  }

  playNextTrack(): void {
    this.currentTrackIndex++;
    if (this.currentTrackIndex === this.numTracks) {
      this.quizComplete = true;
      return;
    }
    this.currentTrackSrc = this.tracks[this.currentTrackIndex].src;
    this.currentOptions = this.tracks[this.currentTrackIndex].options;
  }

  checkAnswer(option: string): void {
    if (option === this.tracks[this.currentTrackIndex].answer) {
      this.score++;
    }
    this.playNextTrack();
  }
}
//}
