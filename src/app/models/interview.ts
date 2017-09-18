import { Question } from './question';

export interface Interview {
  id: number;
  name: string;
  questions?: Question[];
}
