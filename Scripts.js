// tests for collection to get status

try{pm.response.to.have.status(403)
    pm.test("Status code is 403 Forbidden", function(){
        pm.response.to.have.status(403)
    });
    return
    }
catch(e){pm.test("Check status value", () => {throw new Error(e.message)})
}

try{pm.response.to.have.status(404)
    pm.test("Status code is 404 Not Found", function(){
        pm.response.to.have.status(404)
    });
    return
    }
catch(e){pm.test("Check status value", () => {throw new Error(e.message)})
}

try{pm.response.to.have.status(200)
    pm.test("Status code is 200 Ok", function(){
        pm.response.to.have.status(200)
    });
    return
    }
catch(e){pm.test("Check status value", () => {throw new Error(e.message)})
}

try{pm.response.to.have.status(201)
    pm.test("Status code is 201 Created", function(){
        pm.response.to.have.status(201)
    });
    return
    }
catch(e){pm.test("Check status value", () => {throw new Error(e.message)})
}

// response time less than 300
pm.test("Response time is less than 300ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(300);
});

//get posts
var base_url = pm.environment.get("baseUrlSecond");
var test = pm.environment.get("tester");

pm.sendRequest({url:`${base_url}${test}/comments`,
 method: 'GET',
 header:{'Content-Type': 'application/json'},
 body:{mode: 'raw',
 raw: JSON}},
 function (err, response) {
 console.log(response.json());
});

// Check that each posts has required fields
var jsonData = pm.response.json();

pm.test("Check that each blogpost has required fields",
function () {
 var x;
 for (x in jsonData) {
 var postKeys = Object.keys(jsonData[x]);
 pm.expect(postKeys).to.have.members(['content','id',
 'author','name', 'publication_datetime']);
 }
});