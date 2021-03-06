define({ "api": [
  {
    "type": "delete",
    "url": "/captor",
    "title": "DELETE Captor",
    "group": "captor",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Captor deleted",
          "content": "HTTP/1.1 200 Captor deleted\n {\n   \"success\" : true\n   \"status\": 200\n   \"message\": \"Captor deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/captor.js",
    "groupTitle": "captor",
    "name": "DeleteCaptor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/Captor",
    "title": "GET Captor",
    "group": "captor",
    "version": "0.0.0",
    "filename": "./routes/captor.js",
    "groupTitle": "captor",
    "name": "GetCaptor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Captor",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Captor.id",
            "description": "<p>Captor id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Captor.IP",
            "description": "<p>Captor IP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Captor.Type",
            "description": "<p>Captor Type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Captor.Description",
            "description": "<p>Captor Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Captor.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Captor.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"IP\": \"192.168.0.29\",\n     \"Type\": \"Cam\",\n     \"description\": \"Caméra Hall\",\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/Captor",
    "title": "ADD Captor",
    "group": "captor",
    "version": "0.0.0",
    "filename": "./routes/captor.js",
    "groupTitle": "captor",
    "name": "PostCaptor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "description",
            "description": "<p>Captor description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"IP\": \"192.168.0.29\",\n     \"Type\": \"Cam\",\n     \"description\": \"Caméra Hall\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Captor",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Captor.id",
            "description": "<p>Captor id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Captor.IP",
            "description": "<p>Captor IP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Captor.Type",
            "description": "<p>Captor Type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Captor.Description",
            "description": "<p>Captor Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Captor.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Captor.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"IP\": \"192.168.0.29\",\n     \"Type\": \"Cam\",\n     \"description\": \"Caméra Hall\",\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/Captor",
    "title": "UPDATE Captor",
    "group": "captor",
    "version": "0.0.0",
    "filename": "./routes/captor.js",
    "groupTitle": "captor",
    "name": "PutCaptor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "description",
            "description": "<p>Captor description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"IP\": \"192.168.0.29\",\n     \"Type\": \"Cam\",\n     \"description\": \"Caméra Hall\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Captor",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Captor.id",
            "description": "<p>Captor id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Captor.IP",
            "description": "<p>Captor IP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Captor.Type",
            "description": "<p>Captor Type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Captor.Description",
            "description": "<p>Captor Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Captor.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Captor.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"IP\": \"192.168.0.29\",\n     \"Type\": \"Cam\",\n     \"description\": \"Caméra Hall\",\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/device",
    "title": "DELETE Device",
    "group": "device",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Device deleted",
          "content": "HTTP/1.1 200 Device deleted\n {\n   \"success\" : true\n   \"status\": 200\n   \"message\": \"Device deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/device.js",
    "groupTitle": "device",
    "name": "DeleteDevice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/Device",
    "title": "GET Device",
    "group": "device",
    "version": "0.0.0",
    "filename": "./routes/device.js",
    "groupTitle": "device",
    "name": "GetDevice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Device",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Device.id",
            "description": "<p>Device id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Device.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Device.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"device_type\":\n     {\n       \"id\" : 3,\n       \"desciption\" : camera\n     }\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/Device",
    "title": "ADD Device",
    "group": "device",
    "version": "0.0.0",
    "filename": "./routes/device.js",
    "groupTitle": "device",
    "name": "PostDevice",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Device",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Device.id",
            "description": "<p>Device id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Device.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Device.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"device_type\":\n     {\n       \"id\" : 3,\n       \"desciption\" : camera\n     }\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/deviceType",
    "title": "DELETE DeviceType",
    "group": "deviceType",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 DeviceType deleted",
          "content": "HTTP/1.1 200 DeviceType deleted\n {\n   \"success\" : true\n   \"status\": 200\n   \"message\": \"DeviceType deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/deviceType.js",
    "groupTitle": "deviceType",
    "name": "DeleteDevicetype",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/DeviceType",
    "title": "GET DeviceType",
    "group": "deviceType",
    "version": "0.0.0",
    "filename": "./routes/deviceType.js",
    "groupTitle": "deviceType",
    "name": "GetDevicetype",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "DeviceType",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "DeviceType.id",
            "description": "<p>DeviceType id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DeviceType.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DeviceType.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"name\": \"Caméra\"\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/DeviceType",
    "title": "ADD DeviceType",
    "group": "deviceType",
    "version": "0.0.0",
    "filename": "./routes/deviceType.js",
    "groupTitle": "deviceType",
    "name": "PostDevicetype",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"name\": \"Caméra\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "DeviceType",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "DeviceType.id",
            "description": "<p>DeviceType id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DeviceType.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DeviceType.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"name\": \"Caméra\"\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/DeviceType",
    "title": "UPDATE DeviceType",
    "group": "deviceType",
    "version": "0.0.0",
    "filename": "./routes/deviceType.js",
    "groupTitle": "deviceType",
    "name": "PutDevicetype",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"name\": \"Caméra\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "DeviceType",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "DeviceType.id",
            "description": "<p>DeviceType id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DeviceType.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "DeviceType.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"name\": \"Caméra\"\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/door",
    "title": "DELETE Door",
    "group": "door",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Door deleted",
          "content": "HTTP/1.1 200 Door deleted\n {\n   \"success\" : true\n   \"status\": 200\n   \"message\": \"Door deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/door.js",
    "groupTitle": "door",
    "name": "DeleteDoor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/Door",
    "title": "GET Door",
    "group": "door",
    "version": "0.0.0",
    "filename": "./routes/door.js",
    "groupTitle": "door",
    "name": "GetDoor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Door",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Door.id",
            "description": "<p>Door id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Door.name",
            "description": "<p>Door name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Door.ref",
            "description": "<p>Door ref</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Door.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Door.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"name\": \"Porte 4 hall entrée\",\n     \"ref\": \"235463HFTR7850\",\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/Door",
    "title": "ADD Door",
    "group": "door",
    "version": "0.0.0",
    "filename": "./routes/door.js",
    "groupTitle": "door",
    "name": "PostDoor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "description",
            "description": "<p>Door description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"name\": \"Porte 4 hall entrée\",\n     \"ref\": \"235463HFTR7850\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Door",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Door.id",
            "description": "<p>Door id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Door.name",
            "description": "<p>Door name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Door.ref",
            "description": "<p>Door ref</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Door.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Door.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"name\": \"Porte 4 hall entrée\",\n     \"ref\": \"235463HFTR7850\",\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/Door",
    "title": "UPDATE Door",
    "group": "door",
    "version": "0.0.0",
    "filename": "./routes/door.js",
    "groupTitle": "door",
    "name": "PutDoor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "description",
            "description": "<p>Door description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"name\": \"Porte 4 hall entrée\",\n     \"ref\": \"235463HFTR7850\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Door",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Door.id",
            "description": "<p>Door id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Door.name",
            "description": "<p>Door name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Door.ref",
            "description": "<p>Door ref</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Door.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Door.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"name\": \"Porte 4 hall entrée\",\n     \"ref\": \"235463HFTR7850\",\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/event",
    "title": "DELETE Event",
    "group": "event",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Event deleted",
          "content": "HTTP/1.1 200 Event deleted\n {\n   \"success\" : true\n   \"status\": 200\n   \"message\": \"Event deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/event.js",
    "groupTitle": "event",
    "name": "DeleteEvent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/Event",
    "title": "GET Event",
    "group": "event",
    "version": "0.0.0",
    "filename": "./routes/event.js",
    "groupTitle": "event",
    "name": "GetEvent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Event",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Event.date",
            "description": "<p>Event date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Event.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Event.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"device\":\n     {\n       \"device_id\":25\n\n     }\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/Event",
    "title": "ADD Event",
    "group": "event",
    "version": "0.0.0",
    "filename": "./routes/event.js",
    "groupTitle": "event",
    "name": "PostEvent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>Event user_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"user_id\": 7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Event",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Event.id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Event.date",
            "description": "<p>Event date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Event.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Event.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"device\":\n     {\n       \"device_id\":25\n\n     }\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/group",
    "title": "DELETE Group",
    "group": "group",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Group deleted",
          "content": "HTTP/1.1 200 Group deleted\n {\n   \"success\" : true\n   \"status\": 200\n   \"message\": \"Group deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/group.js",
    "groupTitle": "group",
    "name": "DeleteGroup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/Group",
    "title": "GET Group",
    "group": "group",
    "version": "0.0.0",
    "filename": "./routes/group.js",
    "groupTitle": "group",
    "name": "GetGroup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Group",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Group.id",
            "description": "<p>Group id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Group.Description",
            "description": "<p>Group Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Group.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Group.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"description\": \"Host\",\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/Group",
    "title": "ADD Group",
    "group": "group",
    "version": "0.0.0",
    "filename": "./routes/group.js",
    "groupTitle": "group",
    "name": "PostGroup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "description",
            "description": "<p>Group description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"description\": \"Host\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Group",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Group.id",
            "description": "<p>Group id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Group.Description",
            "description": "<p>Group Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Group.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Group.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"description\": \"Host\",\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/Group",
    "title": "UPDATE Group",
    "group": "group",
    "version": "0.0.0",
    "filename": "./routes/group.js",
    "groupTitle": "group",
    "name": "PutGroup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "description",
            "description": "<p>Group description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"description\": \"Host\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Group",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Group.id",
            "description": "<p>Group id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Group.Description",
            "description": "<p>Group Description</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Group.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Group.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"description\": \"Host\",\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/pass",
    "title": "DELETE Pass",
    "group": "pass",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Pass deleted",
          "content": "HTTP/1.1 200 Pass deleted\n {\n   \"success\" : true\n   \"status\": 200\n   \"message\": \"Pass deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/pass.js",
    "groupTitle": "pass",
    "name": "DeletePass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/Pass",
    "title": "GET Pass",
    "group": "pass",
    "version": "0.0.0",
    "filename": "./routes/pass.js",
    "groupTitle": "pass",
    "name": "GetPass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Pass",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Pass.id",
            "description": "<p>Pass id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "User.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Pass.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Pass.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"user_id\": 23,\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/Pass",
    "title": "ADD Pass",
    "group": "pass",
    "version": "0.0.0",
    "filename": "./routes/pass.js",
    "groupTitle": "pass",
    "name": "PostPass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>Pass user_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"user_id\": 7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Pass",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Pass.id",
            "description": "<p>Pass id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "User.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Pass.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Pass.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"user_id\": 23,\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/Pass",
    "title": "UPDATE Pass",
    "group": "pass",
    "version": "0.0.0",
    "filename": "./routes/pass.js",
    "groupTitle": "pass",
    "name": "PutPass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>Pass user_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"user_id\": 7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Pass",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Pass.id",
            "description": "<p>Pass id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "User.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Pass.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Pass.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"user_id\": 23,\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/schedule",
    "title": "DELETE Schedule",
    "group": "schedule",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 Schedule deleted",
          "content": "HTTP/1.1 200 Schedule deleted\n {\n   \"success\" : true\n   \"status\": 200\n   \"message\": \"Schedule deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/schedule.js",
    "groupTitle": "schedule",
    "name": "DeleteSchedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/Schedule",
    "title": "GET Schedule",
    "group": "schedule",
    "version": "0.0.0",
    "filename": "./routes/schedule.js",
    "groupTitle": "schedule",
    "name": "GetSchedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Schedule",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Schedule.id",
            "description": "<p>Schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "Schedule.h_start",
            "description": "<p>Schedule h_start</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "Schedule.h_stop",
            "description": "<p>Schedule h_stop</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Schedule.day",
            "description": "<p>Schedule day</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Group.id",
            "description": "<p>Group id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Door.id",
            "description": "<p>Door id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Schedule.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Schedule.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"h_start\": \"10:00:00.0000\",\n     \"h_stop\" : \"19:00:00.0000\",\n     \"day\": 4,\n     \"group_id\": 2,\n     \"door_id\": 13,\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/Schedule",
    "title": "ADD Schedule",
    "group": "schedule",
    "version": "0.0.0",
    "filename": "./routes/schedule.js",
    "groupTitle": "schedule",
    "name": "PostSchedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "description",
            "description": "<p>Schedule description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"h_start\": \"10:00:00.0000\",\n     \"h_stop\" : \"19:00:00.0000\",\n     \"day\": 4,\n     \"group_id\": 2,\n     \"door_id\": 13\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Schedule",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Schedule.id",
            "description": "<p>Schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "Schedule.h_start",
            "description": "<p>Schedule h_start</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "Schedule.h_stop",
            "description": "<p>Schedule h_stop</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Schedule.day",
            "description": "<p>Schedule day</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Group.id",
            "description": "<p>Group id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Door.id",
            "description": "<p>Door id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Schedule.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Schedule.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"h_start\": \"10:00:00.0000\",\n     \"h_stop\" : \"19:00:00.0000\",\n     \"day\": 4,\n     \"group_id\": 2,\n     \"door_id\": 13,\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/Schedule",
    "title": "UPDATE Schedule",
    "group": "schedule",
    "version": "0.0.0",
    "filename": "./routes/schedule.js",
    "groupTitle": "schedule",
    "name": "PutSchedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "description",
            "description": "<p>Schedule description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"h_start\": \"10:00:00.0000\",\n     \"h_stop\" : \"19:00:00.0000\",\n     \"day\": 4,\n     \"group_id\": 2,\n     \"door_id\": 13\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Schedule",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Schedule.id",
            "description": "<p>Schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "Schedule.h_start",
            "description": "<p>Schedule h_start</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "Schedule.h_stop",
            "description": "<p>Schedule h_stop</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Schedule.day",
            "description": "<p>Schedule day</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Group.id",
            "description": "<p>Group id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Door.id",
            "description": "<p>Door id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Schedule.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Schedule.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 12,\n     \"h_start\": \"10:00:00.0000\",\n     \"h_stop\" : \"19:00:00.0000\",\n     \"day\": 4,\n     \"group_id\": 2,\n     \"door_id\": 13,\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "DELETE User",
    "group": "user",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 User deleted",
          "content": "HTTP/1.1 200 User deleted\n {\n   \"success\" : true\n   \"status\": 200\n   \"message\": \"User deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "DeleteUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/User",
    "title": "GET User",
    "group": "user",
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "GetUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "User.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.Name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "Group",
            "optional": false,
            "field": "User.Group",
            "description": "<p>User group</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "User.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "User.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 1,\n     \"name\": \"Robin\",\n     \"surname\" : \"Tersou\",\n     \"job\" : \"Chomeur\",\n     \"group\" :\n     {\n        \"id\" : 1,\n        \"name\" : \"Group1\"\n     }\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/User",
    "title": "ADD User",
    "group": "user",
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "PostUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>User surname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>User job</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "group_id",
            "description": "<p>User group_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"John\",\n  \"surname\" : \"Doe\",\n  \"job\" : \"Host\",\n  \"group_id\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "User.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.Name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "Group",
            "optional": false,
            "field": "User.Group",
            "description": "<p>User group</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "User.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "User.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 1,\n     \"name\": \"Robin\",\n     \"surname\" : \"Tersou\",\n     \"job\" : \"Chomeur\",\n     \"group\" :\n     {\n        \"id\" : 1,\n        \"name\" : \"Group1\"\n     }\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/User",
    "title": "UPDATE User",
    "group": "user",
    "version": "0.0.0",
    "filename": "./routes/user.js",
    "groupTitle": "user",
    "name": "PutUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>User surname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>User job</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "group_id",
            "description": "<p>User group_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"John\",\n  \"surname\" : \"Doe\",\n  \"job\" : \"Host\",\n  \"group_id\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "User",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "User.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "User.Name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "Group",
            "optional": false,
            "field": "User.Group",
            "description": "<p>User group</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "User.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "User.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"success\" : true,\n  \"status\" : 201,\n  \"datas\" :\n  {\n     \"id\": 1,\n     \"name\": \"Robin\",\n     \"surname\" : \"Tersou\",\n     \"job\" : \"Chomeur\",\n     \"group\" :\n     {\n        \"id\" : 1,\n        \"name\" : \"Group1\"\n     }\n     \"updated_at\": \"2018-05-14T00:00:00.000Z\",\n     \"created_at\": \"2018-05-14T00:00:00.000Z\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n {\n   \"success\" : false,\n   \"status\": 500,\n   \"message\": \"500 Internal Server Error\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"success\" : false,\n   \"status\": 404,\n   \"message\": \"404 Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n {\n   \"success\" : false,\n   \"status\": 400,\n   \"message\": \"400 Bad Request\"\n }",
          "type": "json"
        }
      ]
    }
  }
] });
