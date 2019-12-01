const express= require("express");
const cors = require( "cors");
const bodyParser = require("body-parser");
const mailjet = require ('node-mailjet')
const request = mailjet
.connect('7fad7c15e4f36bdccf29c634314d1d58', 'd071b908d4ad2fe9e80a2b9572aafbf8')
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "KarmeccaApplicationOfficial@gmail.com",
        "Name": "Team"
      },
      "To": [
        {
          "Email": "phuhoangho@csus.edu",
          "Name": "Team"
        }
      ],
      "Subject": "KARMECCA Car Application Status Update",
      "HTMLPart": "<h1>***NOTE: DO NOT REPLY TO THIS EMAIL AS EMAILS WILL NOT BE CHECKED***</h1><br /><h3>Dear Applicant, </h3><br />Your application has been accepted!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
const app = express();
app.use(cors({origin: "*"}));
app.use(bodyParser.json());

app.listen(3000, () =>{
  console.log("The server started on port 3000")
});

app.get("/", function(req, res) {
  res.send("<h1> Testing <h1>");
});

// MAIL JET
app.post("/sendmail", function(req,res) {
  console.log("Email request receieved");
    let user = req.body;
    sendMail(user, info => {
        console.log(`Email sent.`);
        res.send(info);
  });
  });
async function sendMail(user, callback){
  request
    .then((result) => {
      console.log(result.body)
    })
    .catch((err) => {
      console.log(err.statusCode)
    })
}
