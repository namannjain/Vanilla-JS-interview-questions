const input = {
    "message": "Success",
    "code": 1,
    "data": [
        {
            "id": "a71fe0dd-c8f3-4616-9f9b-3344e9957fe3",
            "name": "test 31",
            "ownerId": "7b84bf84-fbfc-11ee-8d70-eb8bf7341ffd",
            "documentUuids": [
                "04827439-6422-4c8d-b5d1-0bd3a59a33ba"
            ]
        },
        {
            "id": "b58daf12-96f9-41fa-a0fb-c9be1e5b6cfe",
            "name": "test 31/test 2",
            "ownerId": "7b84bf84-fbfc-11ee-8d70-eb8bf7341ffd"
        },
        {
            "id": "e2922536-8bb9-4004-92a7-8c6f8dccedb3",
            "name": "test 31/sad",
            "ownerId": "7b84bf84-fbfc-11ee-8d70-eb8bf7341ffd"
        },
        {
            "id": "214c0355-e55c-4c29-9770-d2ac3d67d65b",
            "name": "dsadsads",
            "ownerId": "7b84bf84-fbfc-11ee-8d70-eb8bf7341ffd"
        },
        {
            "id": "248d8bf2-7f5e-4d89-abb9-8952b28cb17d",
            "name": "dsa",
            "ownerId": "7b84bf84-fbfc-11ee-8d70-eb8bf7341ffd"
        },
        {
            "id": "3a1b8164-7ad2-47e3-89dd-abf95239b161",
            "name": "dsadsa",
            "ownerId": "7b84bf84-fbfc-11ee-8d70-eb8bf7341ffd"
        },
        {
            "id": "a9da857e-8360-433f-8e0e-1374d7acad88",
            "name": "test 31/sad/dsadsadsa",
            "ownerId": "7b84bf84-fbfc-11ee-8d70-eb8bf7341ffd"
        },
        {
            "id": "17a0bc03-2d81-40ba-9fe8-1864755179b8",
            "name": "test",
            "ownerId": "7b84bf84-fbfc-11ee-8d70-eb8bf7341ffd"
        },
        {
            "id": "cd4e6749-ab26-40d9-ba57-284e6573b3f8",
            "name": "test 31/test 2/sadsa",
            "ownerId": "7b84bf84-fbfc-11ee-8d70-eb8bf7341ffd"
        }
    ]
};

/* output
{
  "message": "Success",
    "code": 1,
      "data": [
        {
          "id": "a71fe0dd-c8f3-4616-9f9b-3344e9957fe3",
          "name": "test 31",
          "children": [
            {
              "id": "a71fe0dd-c8f3-4616-9f9b-3344e9957fe3",
              "name": "test 2",
              "children": [
                {
                  "id": "cd4e6749-ab26-40d9-ba57-284e6573b3f8",
                  "name": "sadsa"
                }
              ]
            },
            {
              "id": "a71fe0dd-c8f3-4616-9f9b-3344e9957fe3",
              "name": "sad",
              "children": [
                {
                  "id": "a9da857e-8360-433f-8e0e-1374d7acad88",
                  "name": "dsadsadsa"
                }
              ]
            }
          ]
        },
        {
          "id": "214c0355-e55c-4c29-9770-d2ac3d67d65b",
          "name": "dsadsads"
        },
        {
          "id": "248d8bf2-7f5e-4d89-abb9-8952b28cb17d",
          "name": "dsa"
        },
        {
          "id": "3a1b8164-7ad2-47e3-89dd-abf95239b161",
          "name": "dsadsa"
        },
        {
          "id": "17a0bc03-2d81-40ba-9fe8-1864755179b8",
          "name": "test"
        }
      ]
}
*/

function convertData(input) {
  let output = {
      message: input.message,
      code: input.code,
      data: []
  };

  const map = {};
  const rootNodes = [];

  // Build a map to efficiently find nodes by their id
  input.data.forEach(node => {
      map[node.id] = { ...node, children: [] };
  });

  // Link child nodes to their parent nodes
  input.data.forEach(node => {
      if (node.name.includes("/")) {
          const parentIds = node.name.split("/").slice(0, -1);
          let parent = output.data.find(n => n.name === parentIds[0]);
          for (let i = 1; i < parentIds.length; i++) {
              parent = parent.children.find(n => n.name === parentIds[i]);
          }
          if (parent) {
              parent.children.push(map[node.id]);
          }
      } else {
          rootNodes.push(map[node.id]);
      }
  });

  output.data = rootNodes;

  return output;
}

const output = convertData(input);
console.log(JSON.stringify(output, null, 2));
