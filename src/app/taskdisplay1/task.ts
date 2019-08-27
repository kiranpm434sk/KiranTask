export class Task {
  public constructor(
    public task_id:number,
    public title:string,
    public due_date:string,
    public desc:string,
    public priority:string,
    public assigned_to:string,
    public assigned_date:string,
    public comments:string,
    public status:string

  ){}
}
