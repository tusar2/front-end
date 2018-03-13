import { Injectable } from '@angular/core';
import { FormModel } from '../interface/form.model'

@Injectable()
export class ReportFieldsService {

  constructor() { }
  getReports() {

    let reports:FormModel<any>[] = [  
      {  
        "value":"2017-2018",
        "key":"2017-2018",
        "label":"Select Year",
        "required":false,
        "controlType":"dropdown",
        "options":[  
           {  
              "key":"2018-2017",
              "value":"2017-2017"
           },
           {  
              "key":"2017-2018",
              "value":"2017-2018"
           },
           {  
              "key":"2016-2017",
              "value":"2016-2017"
           },
           {  
              "key":"2015-2016",
              "value":"2015-2016"
           }
        ]
     },
     {  
      "key":"report-type",
      "label":"Select report type",
      "required":false,
      "controlType":"dropdown",
      "options":[  
         {  
            "key":"report-typeFood",
            "value":"Monthly report of food section"
         },
         {  
            "key":"report-typeLibrary",
            "value":"Monthly report of library section"
         },
         {  
            "key":"report-typePresentation",
            "value":"Monthly report of presentation section"
         }
      ]
   },
   {  
    "key":"month",
    "label":"Select month",
    "required":false,
    "controlType":"dropdown",
    "options":[  
       {  
          "key":"april",
          "value":"April"
       },
       {  
          "key":"may",
          "value":"May"
       },
       {  
          "key":"june",
          "value":"June"
       },
       {  
        "key":"july",
        "value":"July"
       },
     {  
      "key":"august",
      "value":"August"
     }
    ]
 }
    ]
    return reports;
  }
}
