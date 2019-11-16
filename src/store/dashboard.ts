import { createModule, mutation, action } from 'vuex-class-component';
import { getPatientData } from '@/api/dashboard';
import { GenderFilter, Patient } from '@/types';

// tslint:disable-next-line:variable-name
const VuexModule = createModule({
  namespaced: true,
  strict: false,
});

export class DashboardStore extends VuexModule {
  private patientList: Patient[] = [];
  // TODO: adapt code to handle multiple filter types
  private genderFilter: GenderFilter | {} = {};

  @mutation setPatientData(patientData) {
    this.patientList = patientData;
  }

  @mutation setActiveFilters(genderFilter: GenderFilter) {
    this.genderFilter = genderFilter;
  }

  @action async getPatientData() {
    let filterPayload = {};
    // TODO: Create comma separated list for multiple filter payload
    Object.keys(this.genderFilter).forEach((key) => {
      if(this.genderFilter[key]) {
        // @ts-ignore
        filterPayload.gender = key;
      }
    });
    const patientData: Patient[] = await getPatientData(filterPayload);
    this.setPatientData(patientData);
  }

  @action async updateFilters(genderFilter) {
    await this.setActiveFilters(genderFilter);
    await this.getPatientData();
  }

  get patientData() {
    return this.patientList;
  }
}
