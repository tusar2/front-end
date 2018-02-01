import { Injectable } from '@angular/core';
import { FormModel } from '../interface/form.model'

@Injectable()
export class FormFieldsService {

  constructor() { }
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions:FormModel<any>[] = [  
      {  
         "value":"Odisha",
         "key":"odisha",
         "label":"Select state",
         "required":false,
         "controlType":"dropdown",
         "options":[  
            {  
               "key":"odisha",
               "value":"Odisha"
            },
            {  
               "key":"bihar",
               "value":"Bihar"
            },
            {  
               "key":"karnataka",
               "value":"Karnataka"
            },
            {  
               "key":"westBengal",
               "value":"West Bengal"
            }
         ]
      },
      {  
         "key":"brave",
         "label":"Bravery City",
         "required":false,
         "controlType":"dropdown",
         "options":[  
            {  
               "key":"bbsr",
               "value":"Bhubaneswar"
            },
            {  
               "key":"patna",
               "value":"Patna"
            },
            {  
               "key":"bengaluru",
               "value":"Bengaluru"
            },
            {  
               "key":"kolkata",
               "value":"Kolkata"
            }
         ]
      },
      {  
         "value":"Swarna",
         "key":"firstName",
         "label":"First name",
         "required":true,
         "controlType":"textbox",
         "type":"text"
      },
      {  
         "value":"swarnaprava@sdrc.co.in",
         "key":"emailAddress",
         "label":"Email",
         "required":false,
         "controlType":"textbox",
         "type":"email"
      },
      {  
        "key":"id",
        "label":"Passport",
        "required":false,
        "controlType":"textbox",
        "type":"file"
     },
      {  
        "key":"gender",
        "label":"Gender",
        "required":false,
        "controlType":"radio",
        "type":"radio",
        "options":[  
          {  
             "key":"male1",
             "value":"Male"
          },
          {  
             "key":"female1",
             "value":"Female"
          },
          {  
             "key":"third1",
             "value":"Third Gender"
          }
       ]
     },
     {  
       "key":"message",
       "label":"Message",
       "required":false,
       "controlType":"textarea",
       "type":"textarea"
    }
   ]
    return questions;
  }
}
