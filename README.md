# dropzone-api

## REST API Documentation
| HTTP Action      | URL       | Payload    | Remark    | Response    |
| ---------------- | --------- | ---------- | --------- | ------------ |
| GET              | /jumpdays | none       | Load all jumpdays  | JSON |
| GET              | /jumpdays/`ID`/loads | none | Load all loads enriched by jumper data from this jumpday by `ID` | JSON |
<!--| CREATE           | /jumpdays | JSON<br/>{<br />"Comments": "string"<br />"flightDuration": int<br />"Instructor": "string"<br />"isCompleted": bool<br />"JumpDate": "Datetime"<br/>"Pilot": "string"<br />"SDL": "string"<br />"studentCount": int<br />} | Create a new jumpday | message |
| PUT              | /jumpdays/`ID` | JSON<br/>{<br />"Comments": "string"<br />"flightDuration": int<br />"Instructor": "string"<br />"isCompleted": bool<br />"Pilot": "string"<br />"SDL": "string"<br />"studentCount": int<br />} | Update jumpday with the `ID`according payload | message |
| DEL              | /jumpdays/`ID` | none  |  Delete jumpday with Id=`ID`| message |-->
| GET              | /loads         | none  |  Load all loads   | JSON |
