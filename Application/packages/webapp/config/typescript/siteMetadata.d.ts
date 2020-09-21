export interface PageStateDef {
  state: {
    type: string; // consider adding an enum or array of options here
    name: string;
    data: [
      {
        key: string;
        value: any;
      }
    ];
  };
  auth: boolean;
  title: () => string;
  url: () => string;
  notes?: string;
  role?: [];
  action?: {
    to: string;
    do: string;
  };
}

export interface PageAllStatesDef {
  states: PageStateDef[];
}

export interface PageDef {
  page: {
    states: PageStateDef;
  };
  routes: {
    [key: string]: PageDef;
  };
}
