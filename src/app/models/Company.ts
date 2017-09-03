interface RolePart {
  id: string;
  name: string;
}

interface SkillPart {
  id: string;
  name: string;
  count: number;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  icon: string;
  roles: RolePart[];
  skills: SkillPart[];
  questionCount: number;

  hidden?: boolean;
  draft?: boolean;
  createdTime?: number;
  updatedTime?: number;
}
