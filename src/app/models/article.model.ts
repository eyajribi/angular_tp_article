export class Article {
    public get score(): number {
        return this._score;
    }
    public set score(value: number) {
        this._score = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get publicationDate(): string {
        return this._publicationDate;
    }
    public set publicationDate(value: string) {
        this._publicationDate = value;
    }
    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    plus(): void {
        this.score += 1;
      }
    
      moin(): void {
        if (this.score > 0) {
          this.score -= 1;
        }
      }
  
    constructor(
      private _title: string,
      private _photo: string,
      private _publicationDate: string,
      private _description: string,
      private _score: number=0,
    ) {
      
    }
  
    
  }
  