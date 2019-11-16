import { authApiCall } from '@/api/core';
import { Patient} from '@/types';

// TODO: define type for filterPayload
export async function getPatientData(filterPayload: any): Promise<Patient[]> {
  let url = '/patients';
  const response = await authApiCall.get(url, { params: filterPayload });
  return response.data;
}
