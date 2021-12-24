export type Dispatch = React.Dispatch<IAction>

export interface IState {
    user: {}
}

export interface IAction {
  type: string;
  payload: IUser | any
}

export interface IUser {
  emailAddress: string;
  password: string;
  name: string;
  dateOfDelivery: string;
  workoutFrequency: number;
}