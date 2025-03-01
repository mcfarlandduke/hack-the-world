// resources.d.ts
declare module './resources.js' {
    export interface Location {
      Name: string | null;
      Address: string | null;
      Website: string | null;
      Phone: string | null;
      Hours: any;
    }
  
    export const Locations: Location[];
  }