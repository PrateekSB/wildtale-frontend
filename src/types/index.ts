export interface Patient {
  gender: string;
  age: number;
  treatmentType: string;
  disease: string;
}

export interface GenderFilter {
  male: boolean;
  female: boolean;
  others: boolean;
}
