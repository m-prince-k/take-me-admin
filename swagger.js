require('dotenv/config');
module.exports = ({
  "openapi": "3.0.3",
  "info": {
    "title": "Take Me",
    "description": "Make all backend api to create,read and update data regarding Take Me App",
    "displayRequestDuration": true,
    "contact": {
      "email": "apiteam@swagger.io"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "externalDocs": {
    "description": "Find all the api for Take Me app",
    "url": "http://swagger.io"
  },
  "servers": [
    {
      "url": "https://dev.takeme.ae/api/v1/takeme"
    },
    {
      "url": `http://localhost:${process.env.PORT || 4000}/api/v1/takeme`
    }
  ],
  "tags": [
    // {
    //   "name": "Master Detail"
    // },
    // {
    //   "name": "Post"
    // },
    // {
    //   "name": "Kyc"
    // },
    // {
    //   "name": "Bank Details"
    // },
    // {
    //   "name": "Currencies"
    // },
    // {
    //   "name": "Transactions"
    // },
    // {
    //   "name": "Deposit Address"
    // },
    // {
    //   "name": "Orders"
    // }
  ],
  "paths": {
    "/user/signup": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "Signup user",
        "description": "Auto login user.",
        "operationId": "createUser",
        "security": [
          { "ApiKeyAuth": [] }
        ],
        "requestBody": {
          "description": "Created user object",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/register"
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/sentOtp": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "Send email otp",
        "description": "Send otp for user verification.",
        "operationId": "sentOtp",
        "security": [
          { "ApiKeyAuth": [] }
        ],
        "requestBody": {
          "description": "Otp sent object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string",
                    "example": "demo6@demo.com"

                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/profile": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "Auth User profile",
        "description": "Profile of the logged in user.",
        "operationId": "profile",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user profile object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/getProfileByUserId": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "get Profile By User Id",
        "description": "Profile of the user.",
        "operationId": "getProfileByUserId",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user profile object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "user_id": {
                    "type": "string",
                    "example": "7d763959-9e64-430d-aaa5-69e173f56657"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/update": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "Update user",
        "description": "update user.",
        "operationId": "Update",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "first_name": {
                    "type": "string",
                    "example": "Jenna",
                  },
                  "last_name": {
                    "type": "string",
                    "example": "Doe",
                  },
                  "gender": {
                    "type": "string",
                    "example": "Female",
                  },
                  "dob": {
                    "type": "string",
                    "example": "19/12/1992",
                  },
                  "phone": {
                    "type": "string",
                    "example": "527527",
                  },
                  "phone_code": {
                    "type": "string",
                    "example": "91",
                  },
                  "website": {
                    "type": "string",
                    "example": "htpps://jennadoe.com"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/verifyOtp": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "verify Otp user",
        "description": "verify Otp user.",
        "operationId": "verifyOtp",
        "security": [
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string",
                    "example": "demo7@demo.com"
                  },
                  "otp": {
                    "type": "string",
                    "example": "3679"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/reportUser": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "report User",
        "description": "report User.",
        "operationId": "reportUser",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "user_id": {
                    "type": "string",
                    "example": "f344070c-546e-4ede-a3d8-dddc4df11a1b"
                  },
                  "report_reason_title": {
                    "type": "string",
                    "example": "demo title"
                  },
                  "description": {
                    "type": "string",
                    "example": "demo desc"
                  },
                  "report_user_id": {
                    "type": "string",
                    "example": "cc3895f4-5a4d-437a-ac48-d9ec957929f7"
                  },
                  "report_reason_id": {
                    "type": "string",
                    "example": "f344070c-546e-4ede-a3d8-dddc4df11a1b"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/logout": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "logout User",
        "description": "logout User.",
        "operationId": "logout",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/block": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "user block",
        "description": "Current User blocks another user",
        "operationId": "block",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "block_user_id": {
                    "type": "string",
                    "example": "18fabdff-b3d4-4677-94b6-e4595e5c4026"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/unBlock": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "user unblock",
        "description": "Current User unblocks another user",
        "operationId": "unblock",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "block_user_id": {
                    "type": "string",
                    "example": "18fabdff-b3d4-4677-94b6-e4595e5c4026"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/refreshToken": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "refreshToken",
        "description": "Generate refresh token for the user",
        "operationId": "refreshToken",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string",
                    "example": "ios1@malinator.com"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/follow": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "follow user",
        "description": "Current User follow another user",
        "operationId": "followUser",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "receiver_id": {
                    "type": "string",
                    "example": "cbf3787e-3163-4bf7-bf07-162841bdede7"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/unFollow": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "unFollow user",
        "description": "Current User unFollow another user",
        "operationId": "unFollowUser",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "receiver_id": {
                    "type": "string",
                    "example": "cbf3787e-3163-4bf7-bf07-162841bdede7"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/followingList": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "Following List",
        "description": "Current User following List",
        "operationId": "followingList",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/followerList": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "follower List",
        "description": "Current User follower List",
        "operationId": "followerList",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/checkFollowUser": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "check Follow User",
        "description": "Check if current user follow other user",
        "operationId": "checkFollowUser",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "user_id": {
                    "type": "string",
                    "example": "72da408a-e66f-4e40-912b-4628dffaa509"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/addDeviceData": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "Add device token to user",
        "description": "Add device token to user",
        "operationId": "addDeviceData",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "device_token": {
                    "type": "string",
                    "example": "cWoNGfxQV0DAh64f2rlPxm:APA91bG6vBUCmLGk"
                  },
                  "ip": {
                    "type": "string",
                    "example": "192.168.0.112"
                  },
                  "user_id": {
                    "type": "string",
                    "example": ""
                  },
                  "version": {
                    "type": "string",
                    "example": "1"
                  },
                  "device": {
                    "type": "string",
                    "example": "iOS"
                  }

                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/checkBlockedByUser": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "check Blocked By User",
        "description": "Check if current user is blocked by other user",
        "operationId": "checkBlockedByUser",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "user_id": {
                    "type": "string",
                    "example": "72da408a-e66f-4e40-912b-4628dffaa509"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/searchUser": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "Search user",
        "description": "Search a user",
        "operationId": "searchUser",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "keyword": {
                    "type": "string",
                    "example": "com"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/createCallRecord": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "create Call Record",
        "description": "create Call Record",
        "operationId": "createCallRecord",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "from_user_id": {
                    "type": "string",
                    "example": "c4184a30-88aa-4096-950e-d6dd2cbee3d9"
                  },
                  "to_user_id": {
                    "type": "string",
                    "example": "c4184a30-88aa-4096-950e-d6dd2cbee3d9"
                  },
                  "type": {
                    "type": "string",
                    "example": "audio"
                  },
                  "status": {
                    "type": "string",
                    "example": true
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/liveStreamUser": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "send notification to all followers",
        "description": "send notification to all followers",
        "operationId": "liveStreamUser",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "user_id": {
                    "type": "string",
                    "example": "c4184a30-88aa-4096-950e-d6dd2cbee3d9"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/fetchUserCallRecord": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "fetch User Call Record",
        "description": "fetch User Call Record",
        "operationId": "fetchUserCallRecord",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/updateUserCallStatus": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "update User Call Status",
        "description": "update User Call Status",
        "operationId": "updateUserCallStatus",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "to_user_id": {
                    "type": "string",
                    "example": "c4184a30-88aa-4096-950e-d6dd2cbee3d9"
                  },
                  "status": {
                    "type": "string",
                    "example": "true"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/verifyReferralCode": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "verify Referral Code",
        "description": "verify Referral Code",
        "operationId": "verifyReferralCode",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "referral_code": {
                    "type": "string",
                    "example": "1234"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/checkUserNameExistOrNot": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "check UserName Exist Or Not",
        "description": "check UserName Exist Or Not",
        "operationId": "checkUserNameExistOrNot",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string",
                    "example": "demo6@gmail.com"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/fetchBlockUser": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "fetch Block User",
        "description": "fetch Block User",
        "operationId": "fetchBlockUser",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/user/checkForPhone": {
      "post": {
        "tags": [
          "User Authentication"
        ],
        "summary": "check For Phone",
        "description": "check For Phone",
        "operationId": "checkForPhone",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "user object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "phone_number": {
                    "type": "string",
                    "example": "9988776655"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/product/createProduct": {
      "post": {
        "tags": [
          "Products"
        ],
        "summary": "create Product",
        "description": "create Product",
        "operationId": "createProduct",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "product object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "category_id": {
                    "type": "string",
                    "example": "d006bddd-e7de-403e-98b7-ba3970dcf654"
                  },
                  "title": {
                    "type": "string",
                    "example": "Product One"
                  },
                  "description": {
                    "type": "string",
                    "example": "This is a dummy product"
                  },
                  "size": {
                    "type": "string",
                    "example": "12"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/product/fetchProductById": {
      "post": {
        "tags": [
          "Products"
        ],
        "summary": "fetch Products by id",
        "description": "fetch Products by id",
        "operationId": "fetchProductById",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "product object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "product_id": {
                    "type": "string",
                    "example": ''
                  },

                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/product/fetchProducts": {
      "post": {
        "tags": [
          "Products"
        ],
        "summary": "fetch Products",
        "description": "fetch Products",
        "operationId": "fetchProduct",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "product object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/product/updateProduct": {
      "post": {
        "tags": [
          "Products"
        ],
        "summary": "update Product ",
        "description": "update Product ",
        "operationId": "updateProduct",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "product object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "product_id": {
                    "type": "string",
                    "example": "11c41bc7-da10-41ad-bced-28c50cb5b16a"
                  },
                  "category_id": {
                    "type": "string",
                    "example": "d006bddd-e7de-403e-98b7-ba3970dcf654"
                  },
                  "title": {
                    "type": "string",
                    "example": "Product One"
                  },
                  "description": {
                    "type": "string",
                    "example": "This is a dummy product"
                  },
                  "size": {
                    "type": "string",
                    "example": "12"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/product/fetchProductsByUserId": {
      "post": {
        "tags": [
          "Products"
        ],
        "summary": "fetch Products By UserId  ",
        "description": "fetch Products By UserId  ",
        "operationId": "fetchProductsByUserId",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "product object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "user_id": {
                    "type": "string",
                    "example": '42e936f9-ef2c-4db5-aae0-6ad522002c00'
                  },

                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/product/deleteProduct": {
      "post": {
        "tags": [
          "Products"
        ],
        "summary": "delete  Product ",
        "description": "delete   Product ",
        "operationId": "deleteProduct",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "product object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "product_id": {
                    "type": "string",
                    "example": ""
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/uploadPost": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "upload  Post ",
        "description": "upload   Post ",
        "operationId": "uploadPost",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "description": {
                    "type": "string",
                    "example": "dsfj"
                  },
                  "video": {
                    "type": "string",
                    "example": "dsfj"
                  },
                  "thumbnail": {
                    "type": "string",
                    "example": "dsfj"
                  },
                  "allow_comment": {
                    "type": "string",
                    "example": "dsfj"
                  },
                  "allow_duet": {
                    "type": "string",
                    "example": "dsfj"
                  },
                  "video_id": {
                    "type": "string",
                    "example": "dsfj"
                  },
                  "sound_id": {
                    "type": "string",
                    "example": ""
                  },
                  "location_string": {
                    "type": "string",
                    "example": "dsfj"
                  },
                  "lat": {
                    "type": "string",
                    "example": ""
                  },
                  "long": {
                    "type": "string",
                    "example": ""
                  },
                  "product": {
                    "type": "string",
                    "example": "dsfj"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/fetchPost": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "fetch Post ",
        "description": "fetch Post    ",
        "operationId": "fetchPost",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "example": "1",
                    "comment": "1 for following post and 2 for all post"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/fetchPostByHashTags": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "fetch Post By Hash Tags  ",
        "description": "fetch Post By Hash Tags    ",
        "operationId": "fetchPostByHashTags",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "hashtag_id": {
                    "type": "string",
                    "example": '49cba0a6-8d58-4985-a59e-1e53d23a2e51'
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/fetchUserPost": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "fetchPostByHashTags  ",
        "description": "fetch User  Post    ",
        "operationId": "fetchUserPost",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "user_id": {
                    "type": "string",
                    "example": '42e936f9-ef2c-4db5-aae0-6ad522002c00'
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/increasePostView": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Increase Post View",
        "description": "Increase Post View",
        "operationId": "increasePostView",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "post_id": {
                    "type": "string",
                    "example": '5df73ca6-779a-4ff7-b178-4f3e855ea4a6'
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/popularUserPost": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "popular User Post",
        "description": "popular User Post",
        "operationId": "popularUserPost",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/popularUserPost"
                }
              }
            }
          }
        }
      }
    },
    "/post/rePost": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "re Post",
        "description": "re Post",
        "operationId": "re Post",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "post_id": {
                    "type": "string",
                    "example": '5df73ca6-779a-4ff7-b178-4f3e855ea4a6'
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/rePost"
                }
              }
            }
          }
        }
      }
    },
    "/post/deletePost": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Delete Post",
        "description": "Delete Post",
        "operationId": "Delete Post",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "post_id": {
                    "type": "string",
                    "example": '5df73ca6-779a-4ff7-b178-4f3e855ea4a6'
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/deletePost"
                }
              }
            }
          }
        }
      }
    },
    "/post/favouritePost": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Favourite Post",
        "description": "Favourite Post",
        "operationId": "Favourite Post",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "post_id": {
                    "type": "string",
                    "example": '03b23796-3ad2-407c-8689-2e29f2e0c092'
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/favouritePost"
                }
              }
            }
          }
        }
      }
    },
    "/post/postsByUserId": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "posts By User Id ",
        "description": "posts By User Id    ",
        "operationId": "postsByUserId",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "user_id": {
                    "type": "string",
                    "example": "dsfj"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/fetchPostById": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "posts By Id ",
        "description": "posts By  Id    ",
        "operationId": "fetchPostById",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "post_id": {
                    "type": "string",
                    "example": "dsfj"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/fetchFavouritePost": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "fetch Favourite Post",
        "description": "fetch Favourite Post",
        "operationId": "fetch Favourite Post",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/fetchFavouritePost"
                }
              }
            }
          }
        }
      }
    },
    //
    "/post/likePost": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Like Post ",
        "description": "Like Post    ",
        "operationId": "likePost",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "post_id": {
                    "type": "string",
                    "example": "dsfj"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/fetchUserLikePosts": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Fetch User Like Posts ",
        "description": "Fetch User Like Posts    ",
        "operationId": "fetchUserLikePosts",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "user_id": {
                    "type": "string",
                    "example": "dsfj"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/createDeleteComment": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Create Delete Comment ",
        "description": "Create Delete Comment    ",
        "operationId": "createDeleteComment",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "post_id": {
                    "type": "string",
                    "example": "dsfj"
                  },
                  "comment": {
                    "type": "string",
                    "example": "dsfj"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/searchPost": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Search Post ",
        "description": "Search Post    ",
        "operationId": "searchPost",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "searchValue": {
                    "type": "string",
                    "example": "dsfj"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/popularUserPost": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Popular User Post",
        "description": "Popular User Post   ",
        "operationId": "popularUserPost",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/post/fetchPostComment": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Fetch Post Comment ",
        "description": "Fetch Post Comment    ",
        "operationId": "fetchPostComment",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "post_id": {
                    "type": "string",
                    "example": "dsfj"
                  },
                  "limit": {
                    "type": "string",
                    "example": "10"
                  },
                  "offset": {
                    "type": "string",
                    "example": "0"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },

    "/post/likeComment": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Like Post Comment",
        "description": "Like Post Comment",
        "operationId": "likeComment",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "comment_id": {
                    "type": "string",
                    "example": "dsfj"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },

    "/post/postCommentReply": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Post Comment Reply",
        "description": "Post Comment Reply",
        "operationId": "postCommentReply",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post Comment Reply object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "comment_id": {
                    "type": "string",
                    "example": "dsfj"
                  },
                  "post_id": {
                    "type": "string",
                    "example": "dsfj"
                  },
                  "comment": {
                    "type": "string",
                    "example": "dsfj"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },

    "/post/PostCommentReplyLike": {
      "post": {
        "tags": [
          "Posts"
        ],
        "summary": "Like Post Comment Reply",
        "description": "Like Post Comment Reply",
        "operationId": "PostCommentReplyLike",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Post object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "comment_reply_id": {
                    "type": "string",
                    "example": "dsfj"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },

    "/setting/fetchAllSound ": {
      "post": {
        "tags": [
          "setting"
        ],
        "summary": "fetch All Sound",
        "description": "fetch All Sound",
        "operationId": "fetchAllSound",
        "security": [
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Sound object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/setting/soundFavorite": {
      "post": {
        "tags": [
          "setting"
        ],
        "summary": "Sound Favorite",
        "description": "Sound Favorite",
        "operationId": "soundFavorite",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Sound object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "user_id": {
                    "type": "string",
                    "example": "42e936f9-ef2c-4db5-aae0-6ad522002c00"
                  },
                  "sound_id": {
                    "type": "string",
                    "example": "fcdad8e4-343d-4db2-b5ac-a535083c8ede"
                  },
                }
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    "/setting/fetchFavoriteSound ": {
      "post": {
        "tags": [
          "setting"
        ],
        "summary": "Fetch Favorite Sound",
        "description": "Fetch Favorite Sound",
        "operationId": "fetchFavoriteSound",
        "security": [
          { "bearerAuth": [] },
          { "ApiKeyAuth": [] },
        ],
        "requestBody": {
          "description": "Sound object",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "default": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/register"
                }
              }
            }
          }
        }
      }
    },
    // "/register": {
    //   "post": {
    //     "tags": [
    //       "Basic Details"
    //     ],
    //     "summary": "Create user",
    //     "description": "Create a new user.",
    //     "operationId": "createUser",
    //     "requestBody": {
    //       "description": "Created user object",
    //       "content": { 
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/register"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "default": {
    //         "description": "successful operation",
    //         "content": {
    //           "application/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/register"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    // "/login": {
    //   "post": {
    //     "tags": [
    //       "Master Detail"
    //     ],
    //     "summary": "Logs user into the system",
    //     "description": "",
    //     "operationId": "loginUser",
    //     "requestBody": {
    //       "description": "login user",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/login"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "successful operation",
    //         "headers": {
    //           "X-Rate-Limit": {
    //             "description": "calls per hour allowed by the user",
    //             "schema": {
    //               "type": "integer",
    //               "format": "int32"
    //             }
    //           },
    //           "X-Expires-After": {
    //             "description": "date in UTC when token expires",
    //             "schema": {
    //               "type": "string",
    //               "format": "date-time"
    //             }
    //           }
    //         },
    //         "content": {
    //           "application/json": {
    //             "schema": {
    //               "type": "string"
    //             }
    //           }
    //         }
    //       },
    //       "400": {
    //         "description": "Invalid username/password supplied"
    //       }
    //     }
    //   }
    // },
    // "/forgotPassword": {
    //   "post": {
    //     "tags": [
    //       "Master Detail"
    //     ],
    //     "summary": "Generate new user password",
    //     "description": "Generate new user password.",
    //     "operationId": "forgotPassword",
    //     "requestBody": {
    //       "description": "Created user object",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/forgotPassword"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "default": {
    //         "description": "successful operation",
    //         "content": {
    //           "application/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/forgotPassword"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    // "/resetPassword/{token}": {
    //   "post": {
    //     "tags": [
    //       "Basic Details"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Set new user password",
    //     "operationId": "resetPassword",
    //     "parameters": [
    //       {
    //         "name": "Token",
    //         "in": "path",
    //         "required": true,
    //         "schema": {
    //           "type": "string"
    //         }
    //       }
    //     ],
    //     "requestBody": {
    //       "description": "Set new user password",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/resetPassword"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "successful operation",
    //         "content": {
    //           "application/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/resetPassword"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    // "/changePassword": {
    //   "post": {
    //     "tags": [
    //       "Basic Details"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "change the password",
    //     "operationId": "changePassword",
    //     "requestBody": {
    //       "description": "Created new Password",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/changePassword"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "default": {
    //         "description": "successful operation",
    //         "content": {
    //           "application/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/changePassword"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    // "/editProfile": {
    //   "post": {
    //     "tags": [
    //       "Basic Details"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Update user Profile Details",
    //     "operationId": "updateProfile",
    //     "requestBody": {
    //       "description": "Update user Profile Details",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/editProfile"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "default": {
    //         "description": "successful operation",
    //         "content": {
    //           "application/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/editProfile"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    // "/getProfile": {
    //   "get": {
    //     "tags": [
    //       "Basic Details"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get user Profile Details",
    //     "operationId": "getProfile",
    //     "parameters": [],
    //     "responses": {
    //       "default": {
    //         "description": "successful operation"
    //       }
    //     }
    //   }
    // },
    // "/verifyOtp": {
    //   "post": {
    //     "tags": [
    //       "Basic Details"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Verify user Profile Details",
    //     "operationId": "verifyOtp",
    //     "requestBody": {
    //       "description": "Verify user Profile Details",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/verifyOtp"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Otp verify successfully"
    //       },
    //       "400": {
    //         "description": "otp does not matched, Try again"
    //       },
    //       "404": {
    //         "description": "Not found"
    //       }
    //     }
    //   }
    // },
    // "/multiAuth": {
    //   "post": {
    //     "tags": [
    //       "Basic Details"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "multiple Authentication on user Profile",
    //     "operationId": "multiAuth",
    //     "requestBody": {
    //       "description": "multiple Authentication on user Profile",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/multiAuth"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "multiple Authentication verify successfully"
    //       },
    //       "400": {
    //         "description": "Token or passwords does not matched, Try again"
    //       },
    //       "404": {
    //         "description": "Not found"
    //       }
    //     }
    //   }
    // },
    // "/getmultiAuth": {
    //   "get": {
    //     "tags": [
    //       "Basic Details"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "get multiple Authentication user Profile",
    //     "operationId": "getmultiAuth",
    //     "responses": {
    //       "200": {
    //         "description": "multiple Authentication getting successfully"
    //       },
    //       "404": {
    //         "description": "Not found"
    //       }
    //     }
    //   }
    // },
    // "logout": {
    //   "get": {
    //     "tags": [
    //       "Basic Details"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Logs out current logged in user session",
    //     "description": "",
    //     "operationId": "logoutUser",
    //     "parameters": [],
    //     "responses": {
    //       "default": {
    //         "description": "successful operation"
    //       }
    //     }
    //   }
    // },
    // "/fetchPost": {
    //   "post": {
    //     "tags": [
    //       "Post"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "fetch All Posts",
    //     "description": "All post fetched w.r.t user sound ,profile category",
    //     "operationId": "posts",
    //     "requestBody": {
    //       "description": "Created user object",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/getPost"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "default": {
    //         "description": "successful operation",
    //         "content": {
    //           "application/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/getticket"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    // "/createTicket": {
    //   "post": {
    //     "tags": [
    //       "Supports"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Generate new ticket",
    //     "description": "created an new tickets.",
    //     "operationId": "createTicket",
    //     "requestBody": {
    //       "content": {
    //         "multipart/form-data": {
    //           "schema": {
    //             "$ref": "#/components/schemas/createTicket"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Ticket created successfully",
    //         "content": {
    //           "multipart/form-data": {
    //             "schema": {
    //               "$ref": "#/components/schemas/createTicket"
    //             }
    //           }
    //         }
    //       },
    //       "404": {
    //         "description": "Ticket details not found"
    //       }
    //     }
    //   }
    // },
    // "/getAllSupportDepartment": {
    //   "get": {
    //     "tags": [
    //       "Supports"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get all support department",
    //     "operationId": "allsupport",
    //     "responses": {
    //       "200": {
    //         "description": "All department fetched successfully"
    //       },
    //       "404": {
    //         "description": "Support department not found"
    //       }
    //     }
    //   }
    // },
    // "/viewTicket/{id}": {
    //   "get": {
    //     "tags": [
    //       "Supports"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get Ticket details",
    //     "operationId": "ticketinfo",
    //     "parameters": [
    //       {
    //         "name": "id",
    //         "in": "path",
    //         "required": true,
    //         "example": 66,
    //         "schema": {
    //           "type": "integer"
    //         }
    //       }
    //     ],
    //     "responses": {
    //       "200": {
    //         "description": "Ticket has been fetched successfully"
    //       },
    //       "404": {
    //         "description": "Ticket details not found"
    //       }
    //     }
    //   }
    // },
    // "/createThread": {
    //   "post": {
    //     "tags": [
    //       "Supports"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "create ticket threads",
    //     "operationId": "createThread",
    //     "requestBody": {
    //       "description": "create ticket threads comment",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/createThread"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Thread has been created successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "Ticket thread not found"
    //       }
    //     }
    //   }
    // },
    // "/getAllThread": {
    //   "post": {
    //     "tags": [
    //       "Supports"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get all ticket threads",
    //     "operationId": "getAllThread",
    //     "requestBody": {
    //       "description": "Get all ticket threads comment",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/getAllThread"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "All thread fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "Ticket thread not found"
    //       }
    //     }
    //   }
    // },
    // "/getAdminThread": {
    //   "post": {
    //     "tags": [
    //       "Supports"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get all Admin ticket threads",
    //     "operationId": "getAdminThread",
    //     "requestBody": {
    //       "description": "Get all ticket Admin threads",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/getAdminThread"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "All admin thread fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "admin thread not found"
    //       }
    //     }
    //   }
    // },
    // "/createKyc": {
    //   "post": {
    //     "tags": [
    //       "Kyc"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get all Admin ticket threads",
    //     "operationId": "createKyc",
    //     "requestBody": {
    //       "description": "Get all ticket Admin threads",
    //       "content": {
    //         "multipart/form-data": {
    //           "schema": {
    //             "$ref": "#/components/schemas/createKyc"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Kyc has been created successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/getKyc": {
    //   "get": {
    //     "tags": [
    //       "Kyc"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get all Admin ticket threads",
    //     "operationId": "getKyc",
    //     "responses": {
    //       "200": {
    //         "description": "All kyc data fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/editKyc": {
    //   "post": {
    //     "tags": [
    //       "Kyc"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get all Admin ticket threads",
    //     "operationId": "editKyc",
    //     "requestBody": {
    //       "description": "Get all ticket Admin threads",
    //       "content": {
    //         "multipart/form-data": {
    //           "schema": {
    //             "$ref": "#/components/schemas/createKyc"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Kyc has been updated successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/autoPopulateKyc": {
    //   "get": {
    //     "tags": [
    //       "Kyc"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Kyc auto populate details",
    //     "operationId": "autoPopulateKyc",
    //     "responses": {
    //       "200": {
    //         "description": "Kyc populate details fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/createBankDetail": {
    //   "post": {
    //     "tags": [
    //       "Bank Details"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Bank account information saved",
    //     "operationId": "createBankDetail",
    //     "requestBody": {
    //       "description": "Bank account information saved",
    //       "content": {
    //         "multipart/form-data": {
    //           "schema": {
    //             "$ref": "#/components/schemas/createBankDetail"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Bank Details has been saved successfully"
    //       },
    //       "400": {
    //         "description": "Account details is already Exist, Try different"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/getBankDetail": {
    //   "get": {
    //     "tags": [
    //       "Bank Details"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Bank Details fetched",
    //     "operationId": "getBankDetail",
    //     "responses": {
    //       "200": {
    //         "description": "Bank Details fetched successfully"
    //       },
    //       "404": {
    //         "description": "Bank Details not found"
    //       }
    //     }
    //   }
    // },
    // "/gettingBankDetailByAdmin": {
    //   "get": {
    //     "tags": [
    //       "Bank Details"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Bank Detail has been fetched by admin",
    //     "operationId": "gettingBankDetailByAdmin",
    //     "responses": {
    //       "200": {
    //         "description": "Bank Detail has been fetched by admin successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/getFiatCurrencies": {
    //   "get": {
    //     "tags": [
    //       "Currencies"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get Fiat currency details",
    //     "operationId": "getFiatCurrencies",
    //     "responses": {
    //       "200": {
    //         "description": "Fiat currency fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/getCryptoCurrencies": {
    //   "get": {
    //     "tags": [
    //       "Currencies"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get Crypto currency details",
    //     "operationId": "getCryptoCurrencies",
    //     "responses": {
    //       "200": {
    //         "description": "Crypto currency fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/getAllCurrenciesPair": {
    //   "post": {
    //     "tags": [
    //       "Currencies"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get All currency pair details",
    //     "operationId": "getallCurrenciespair",
    //     "requestBody": {
    //       "description": "Get All currency pair details",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "type": "object",
    //             "properties": {
    //               "type": {
    //                 "type": "integer",
    //                 "required": true,
    //                 "example": "2"
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "All Pair Currency fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/getAllCurrenciesTabs": {
    //   "get": {
    //     "tags": [
    //       "Currencies"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get All currency tabs details",
    //     "operationId": "getallCurrenciestabs",
    //     "responses": {
    //       "200": {
    //         "description": "Pair currency tabs fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/createDeposit": {
    //   "post": {
    //     "tags": [
    //       "Transactions"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "create new  Deposit type",
    //     "operationId": "createDeposit",
    //     "requestBody": {
    //       "description": "create new  Deposit type",
    //       "content": {
    //         "multipart/form-data": {
    //           "schema": {
    //             "$ref": "#/components/schemas/createDeposit"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Deposit has been create successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/gettingDeposit": {
    //   "get": {
    //     "tags": [
    //       "Transactions"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get Deposit listing",
    //     "operationId": "gettingDeposit",
    //     "responses": {
    //       "200": {
    //         "description": "Deposit listing getting successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/gettingTransactionBasedOnCurrency": {
    //   "post": {
    //     "tags": [
    //       "Transactions"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Get transaction by currencies",
    //     "operationId": "gettingTransactionBasedOnCurrency",
    //     "requestBody": {
    //       "description": "Get transaction by currencies",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "type": "object",
    //             "properties": {
    //               "currency_id": {
    //                 "type": "integer",
    //                 "required": true,
    //                 "example": 2
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "transaction has been fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/saveCryptoDepositAddress": {
    //   "post": {
    //     "tags": [
    //       "Deposit Address"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "create a new Wallet",
    //     "operationId": "saveCryptoDepositAddress",
    //     "requestBody": {
    //       "description": "create a new Wallet",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "type": "object",
    //             "properties": {
    //               "currency_id": {
    //                 "type": "integer",
    //                 "required": true,
    //                 "example": 2
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Wallet created successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/orderPlace": {
    //   "post": {
    //     "tags": [
    //       "Orders"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "Place an order",
    //     "operationId": "orderPlace",
    //     "requestBody": {
    //       "description": "Place an order",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "type": "object",
    //             "properties": {
    //               "pair_id": {
    //                 "type": "integer",
    //                 "required": true,
    //                 "example": 1
    //               },
    //               "side": {
    //                 "type": "string",
    //                 "required": true,
    //                 "example": "buy"
    //               },
    //               "order_type": {
    //                 "type": "string",
    //                 "required": true,
    //                 "example": "market"
    //               },
    //               "price": {
    //                 "type": "string",
    //                 "required": true,
    //                 "example": "2.568"
    //               },
    //               "volume": {
    //                 "type": "integer",
    //                 "required": true,
    //                 "example": 2
    //               },
    //               "token": {
    //                 "type": "string",
    //                 "required": true,
    //                 "example": "FQjABCwkGrea8r53bRIdEBcpJ9oJSJfQ"
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "order has been placed successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "record not found"
    //       }
    //     }
    //   }
    // },
    // "/getOrderHistory": {
    //   "post": {
    //     "tags": [
    //       "Orders"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "list all Order History",
    //     "operationId": "getOrderHistory",
    //     "requestBody": {
    //       "description": "Place an order",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "type": "object",
    //             "properties": {
    //               "pair_id": {
    //                 "type": "integer",
    //                 "required": true,
    //                 "example": 1
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Order History has been fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "Record not found"
    //       }
    //     }
    //   }
    // },
    // "/getOrderBook": {
    //   "post": {
    //     "tags": [
    //       "Orders"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "list all book order",
    //     "description": "All types: active,completed,cancel,market_watch_price",
    //     "operationId": "getOrderBook",
    //     "requestBody": {
    //       "description": "Place an order",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "type": "object",
    //             "properties": {
    //               "pair_id": {
    //                 "type": "integer",
    //                 "required": true,
    //                 "example": 1
    //               },
    //               "type": {
    //                 "type": "string",
    //                 "required": true,
    //                 "example": "completed"
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "List of all the booked order"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "Record not found"
    //       }
    //     }
    //   }
    // },
    // "/cancelOrder": {
    //   "post": {
    //     "tags": [
    //       "Orders"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "list all cancel order",
    //     "operationId": "cancelOrder",
    //     "requestBody": {
    //       "description": "list all cancel order",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "type": "object",
    //             "properties": {
    //               "order_id": {
    //                 "type": "string",
    //                 "required": true,
    //                 "example": 20
    //               },
    //               "token": {
    //                 "type": "string",
    //                 "required": true,
    //                 "example": "FQjABCwkGrea8r53bRIdEBcpJ9oJSJfQ"
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Cancel order has been fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "Record not found"
    //       }
    //     }
    //   }
    // },
    // "/getTopTenActiveBuyOrders": {
    //   "post": {
    //     "tags": [
    //       "Orders"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "list top 10 buy order",
    //     "operationId": "getTopTenActiveBuyOrders",
    //     "requestBody": {
    //       "description": "list top 10 buy order",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "type": "object",
    //             "properties": {
    //               "pair_id": {
    //                 "type": "integer",
    //                 "required": true,
    //                 "example": 1
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Top Ten Active Buy Orders has been fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "Record not found"
    //       }
    //     }
    //   }
    // },
    // "/getTopTenActiveSellOrders": {
    //   "post": {
    //     "tags": [
    //       "Orders"
    //     ],
    //     "security": [
    //       {
    //         "bearerAuth": []
    //       }
    //     ],
    //     "summary": "list top 10 sell order",
    //     "operationId": "getTopTenActiveSellOrders",
    //     "requestBody": {
    //       "description": "list top 10 sell order",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "type": "object",
    //             "properties": {
    //               "pair_id": {
    //                 "type": "integer",
    //                 "required": true,
    //                 "example": 1
    //               }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Top Ten Active sell Orders has been fetched successfully"
    //       },
    //       "400": {
    //         "description": "Unauthorized Users"
    //       },
    //       "404": {
    //         "description": "Record not found"
    //       }
    //     }
    //   }
    // }
  },
  "components": {
    "schemas": {
      "register": {
        "type": "object",
        "properties": {
          "login_type": {
            "type": "integer",
            "format": "int64",
            "minimum": 1,
            "maximum": 5
          },
          "email": {
            "type": "string",
            "example": "shivalik@gmail.com"
          },
          "social_id": {
            "type": "string",
            "example": "kumar"
          },
          "firstname": {
            "type": "string",
            "example": "mehra"
          },
          "email": {
            "type": "string",
            "example": "john@email.com"
          },
          "phone": {
            "type": "string",
            "example": "123456"
          },
          "language": {
            "type": "array",
            "example": [
              {
                "language_id": "4bf7bbd8-04b0-4659-84b3-553984bba345"
              }
            ]
          },
          "category": {
            "type": "array",
            "example": [
              {
                "category_id": "d006bddd-e7de-403e-98b7-ba3970dcf654"
              }
            ]
          },

        }
      },
      "popularUserPost":{
        "type": "object",
        "properties": {

        }
      },
      "rePost":{
        "type":"object",
        "properties": {
        "post_id": {
          "type": "string",
          "example": "3745939b-b2d5-415e-a4b6-2614e57b88b5"
        },
      }
      },
      "deletePost":{
        "type":"object",
        "properties": {
        "post_id": {
          "type": "string",
          "example": "3745939b-b2d5-415e-a4b6-2614e57b88b5"
        },
      }
      },
      "favouritePost":{
        "type":"object",
        "properties": {
        "post_id": {
          "type": "string",
          "example": "3745939b-b2d5-415e-a4b6-2614e57b88b5"
        },
      }
      },
      "fetchFavouritePost":{
        
      }
      // "register": {
      //   "type": "object",
      //   "properties": {
      //     "username": {
      //       "type": "string",
      //       "example": "hello world"
      //     },
      //     "first_name": {
      //       "type": "string",
      //       "example": "shivalik"
      //     },
      //     "middle_name": {
      //       "type": "string",
      //       "example": "kumar"
      //     },
      //     "last_name": {
      //       "type": "string",
      //       "example": "mehra"
      //     },
      //     "email": {
      //       "type": "string",
      //       "example": "john@email.com"
      //     },
      //     "password": {
      //       "type": "string",
      //       "example": "123456"
      //     },
      //     "mobile_no": {
      //       "type": "string",
      //       "example": "9865326598"
      //     }
      //   }
      // },
      // "login": {
      //   "type": "object",
      //   "properties": {
      //     "email": {
      //       "type": "string",
      //       "required": true,
      //       "example": "jhon@yopmail.com"
      //     },
      //     "password": {
      //       "type": "string",
      //       "required": true,
      //       "example": "Test@12345"
      //     },
      //     "type": {
      //       "type": "string",
      //       "required": true,
      //       "example": "AuthLogin"
      //     }
      //   }
      // },
      // "verifyOtp": {
      //   "type": "object",
      //   "properties": {
      //     "otp": {
      //       "type": "string",
      //       "required": true,
      //       "example": "J4FVOJZ4AJHWSU3T"
      //     }
      //   }
      // },
      // "multiAuth": {
      //   "type": "object",
      //   "properties": {
      //     "token": {
      //       "type": "string",
      //       "required": true,
      //       "example": "J4FVOJZ4AJHWSU3T"
      //     },
      //     "password": {
      //       "type": "string",
      //       "required": true,
      //       "example": "Test@12345"
      //     }
      //   }
      // },
      // "forgotPassword": {
      //   "type": "object",
      //   "properties": {
      //     "email": {
      //       "type": "string",
      //       "example": "esha@yopmail.com"
      //     }
      //   }
      // },
      // "resetPassword": {
      //   "type": "object",
      //   "properties": {
      //     "new_password": {
      //       "type": "string",
      //       "example": "111111"
      //     },
      //     "confirm_password": {
      //       "type": "string",
      //       "example": "111111"
      //     }
      //   }
      // },
      // "changePassword": {
      //   "type": "object",
      //   "properties": {
      //     "old_password": {
      //       "type": "string",
      //       "required": "true",
      //       "example": "Test@1234"
      //     },
      //     "new_password": {
      //       "type": "string",
      //       "required": "true",
      //       "example": "Test@12345"
      //     },
      //     "confirm_password": {
      //       "type": "string",
      //       "required": "true",
      //       "example": "Test@12345"
      //     }
      //   }
      // },
      // "editProfile": {
      //   "type": "object",
      //   "properties": {
      //     "username": {
      //       "type": "string",
      //       "example": "jhon"
      //     },
      //     "email": {
      //       "type": "string",
      //       "example": "jhon@gmail.com"
      //     },
      //     "date_of_birth": {
      //       "type": "string",
      //       "example": "2023/06/05"
      //     },
      //     "present_address": {
      //       "type": "string",
      //       "example": "phase 5 mohali tower punjab"
      //     },
      //     "permanent_address": {
      //       "type": "string",
      //       "example": "hno 137 phase 5 madanpur chowk punjab"
      //     },
      //     "city": {
      //       "type": "string",
      //       "example": "mohali"
      //     },
      //     "postel_code": {
      //       "type": "string",
      //       "example": "postel_code"
      //     },
      //     "country": {
      //       "type": "string",
      //       "example": "india"
      //     },
      //     "profile_image": {
      //       "type": "string",
      //       "example": "sample.png"
      //     }
      //   }
      // },
      // "getPost": {
      //   "type": "object"
      // },
      // "createTicket": {
      //   "type": "object",
      //   "properties": {
      //     "enquiry": {
      //       "type": "string",
      //       "required": true,
      //       "example": "Upload form"
      //     },
      //     "department": {
      //       "type": "string",
      //       "required": true,
      //       "example": "finance"
      //     },
      //     "description": {
      //       "type": "string",
      //       "required": true,
      //       "example": "try to upload form"
      //     },
      //     "upload_document": {
      //       "type": "string",
      //       "format": "binary",
      //       "nullable": true,
      //       "example": "test.png"
      //     }
      //   }
      // },
      // "getAllThread": {
      //   "type": "object",
      //   "properties": {
      //     "id": {
      //       "type": "integer",
      //       "required": true,
      //       "example": "60"
      //     }

      //   }
      // },
      // "getAdminThread": {
      //   "type": "object",
      //   "properties": {
      //     "id": {
      //       "type": "integer",
      //       "required": true,
      //       "example": "60"
      //     },
      //     "admin_id": {
      //       "type": "integer",
      //       "required": true,
      //       "example": "1"
      //     },
      //     "type": {
      //       "type": "string",
      //       "required": true,
      //       "example": "adminThread"
      //     }

      //   }
      // },
      // "createThread": {
      //   "type": "object",
      //   "properties": {
      //     "ticket_id": {
      //       "type": "integer",
      //       "required": true,
      //       "example": "60"
      //     },
      //     "thread_messages": {
      //       "type": "string",
      //       "required": true,
      //       "example": "phase 5 mohali tower punjab"
      //     }
      //   }
      // },
      // "createKyc": {
      //   "type": "object",
      //   "properties": {
      //     "firstname": {
      //       "type": "string",
      //       "required": true,
      //       "example": "john"
      //     },
      //     "lastname": {
      //       "type": "string",
      //       "required": true,
      //       "example": "deo"
      //     },
      //     "mobile_no": {
      //       "type": "string",
      //       "required": true,
      //       "example": "9765321452"
      //     },
      //     "city": {
      //       "type": "string",
      //       "required": true,
      //       "example": "chd"
      //     },
      //     "state": {
      //       "type": "string",
      //       "required": true,
      //       "example": "chd"
      //     },
      //     "nationality": {
      //       "type": "string",
      //       "required": true,
      //       "example": "india"
      //     },
      //     "postal_code": {
      //       "type": "integer",
      //       "required": true,
      //       "example": "209102"
      //     },
      //     "residential_address": {
      //       "type": "string",
      //       "required": true,
      //       "example": "phase XI mohali"
      //     },
      //     "country_code": {
      //       "type": "string",
      //       "required": true,
      //       "example": "+91"
      //     },
      //     "email": {
      //       "type": "string",
      //       "required": true,
      //       "example": "test@gmail.com"
      //     },
      //     "pancard": {
      //       "type": "string",
      //       "required": true,
      //       "example": "EHWPM4057A"
      //     },
      //     "identity_proof": {
      //       "type": "string",
      //       "format": "binary",
      //       "nullable": true,
      //       "example": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCACWAMgDASIAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAABgQFBwgAAwkCAf/EAEsQAAEDAwIEAwUFAwYKCwAAAAECAwQABREGIQcSMUEIE1EiMmFxgRSRobHBFUJSFiMzYoKSQ2RyorLC0dLh8AkXJTRTVHSDhKOz/8QAGwEAAgMBAQEAAAAAAAAAAAAAAwQBAgUABgf/xAAxEQACAgEDAQYFBAEFAAAAAAABAgADEQQSITEFE0FRkaEiMmFxgRQjsdEGM0LB8PH/2gAMAwEAAhEDEQA/AKgxLgmQfKWPLeT1T6/EUpWlKgc4NNMiONlAnI3SR1T8q9xrkoH7PKI5uiV9Ar/Ya88agDuWagJ8YubeciK5k5KD1FL2JaXU8yVAg01LkZTyr6CtLb3knnbBUlXbNTtwMyM5OISJfyMA/ClMSS4wrk5yEk7fCmeE8l3CgdjTq0ElOCQKsrHMhkhRbXUAhXX4mjXT90LDqCD0qK4t4jQFhuRJTjsc5Ip8g6viJWAw246emQMCtTTO+IrYg8JcTgxxJlacusaYw8QAoBQJ6ir56dvkTUVoj3aGsFDyASB+6e4rkVpHVt3LqPJYDSM7Z61dfw1cWX4TyLHeZfNGkEBOT7h9a0nTcu/xi8sXrO3kwv2myjK2RhYHdFVu4w6Xj3K2uTY7BWVDmTj8qtmpLchkpIC23E49QoGoN4gQWdPypNrl4TFcSXWFr6BO/f4Uaoi+k1n5l5H2ijg0Wixeh6/3ObfECJdIs55puKG8E7kZqNnoNykPEvyCB6c2PyqfOL8tF8v0iNpyG9IaSshTyWzyqPwPp8aBrRw7vtwlpRIbbitkjmW4sHb6ZrIssCsSBNRANsJ/DdwZufEzWcSzwXC0ylQXJknZLaB1+uK6sWVrS+h7DC0/Dlx48WAyllCSscxAG5PqSckn1qgHD6aeG8FUayTAy46AHHEDdX1p5u/Em5qiOvG5PKWAVe0un63R8Iz8RJ93zKOZeaVr7SsRvzFXVpQ6+yc0IXrj1pe3JUI386odMqrn7N46SWFKacmrUPTOaGbpxoffUQhainHQqrZq7Pp64J9oi19x8hLxXzxLSXipqGtDSf6vWhV3ixcNRIc8y6uJCDjCVbmqUO8TZ0l3CXykZ6g70ccM9VPzpsqM4+pSlICxk9gcH867Wp3FRNagS1ALNlmzJ6uV0jyXCuQ+4+objncJ/wCFNTk1kE+UhI7bDFMqHlKTzLVtXhy6QI4/nZSB9a889r2cMY+FA6R2XLKhtik6nFKND8rW1kYyA/znOAEgnJ+lMsziNyEJiQFqyR7Szyj/AG0PaZMN1KJPWsqNX9XakmKyz5EdsjsCo/p+VZUBTOlZNTaMk25S5VuBdj5yUdVIH6igqVHKgSB8wTUiX3UWvE3GTbIGmHGlNuKQHHG1KyM7EHpQw9w+1dc1uS7i600tWVFGcEn6bUiimsDcQI6rkjmCr1xcZbUyVc+MYwdxSkXlhKAlplThxtnavr2njCcWxJaWl1GxCtq1RYM4O4Yhqd5s4SlBJ29KuErblZOTnmbWZ90WeaKkNA+g/wBtLYkedLJMq4OBPQp5j+VOVk0xd702HoaWS2dvfGR8x2ows3CS4SHw5cJ6Wk43DQySe3WuJUD4cCdvA6wagWqA3jYrV8TRBaApiQiI3EUpS1AI5EZJJ7fGpK09w0sdsKXltKedA95Zzn6UaQ7LbWVodRCZSpHukNgcvy9KhLTnGcyGbI6QN09p/UbikFMJTI29p0hIHzHX8KmTQ8S52yQy87cEJUgggtgn8TimqK0E4wKeYS3G8cp2FP1244zFX5l1uFHFC1TrI1AvNyaZcYSAhx9wDI9M0xeJsS7hpeFIt/lOwlFSlPN7k/DmH7tVli3WUykcrqhjtmjDTvESWLS/pu8PLfhOA8iVkkIJ9KJuUA5MGQZD9wjJS6oFNN/tIJ5Rg0YX63NJlKUyeZBOQaZHIOT7uazSAYypOI0F17PvGk8h1flqCjnPY09m2nGAmkki2LKSAg/dV0YqMCQRmV81q2q33F9pIUEgkpGex6UHm7O9QNu1S1xX088023cUNnqUK2+o/WoqirjRS8h+CiQXBhJWojk+WK9jodX3mnDdTMm6nDmeGbm/5g51kAmpb4MT/M1KhsqJLrSkfTr+lQ6iOpTvOEYydh6VNfh50rdbvqtuWxGcMSElSn3eX2U5SQlOfUnt6A0PtBw1TZ8pNIwwlg24alxlezvynagA6Zvcl5wRLS88nmUkLI6pycbmpsj2YoASoYxStFvSgbCvMCwgR6Q1F4bahkqBe8hgdypWSPupzZ4SsOAftC5uKwckNIA/OpSEM4yRXwxiO1QbWPjOxAeLoCwRAOaOt4jb+cWf0rKM1MAbkVlDLE+M6VskQkPZ5kA7dxTVJtLSsgIH3UUuR8bikq2Ekbpz9Kz9wEOBASfpO3ylpdkRGnVp6FSQSKUxrEhpAQ20gD0xT/eFptsB6cpIIZQVYPegB/W95kK5IjTLCTt7vMavXU1nKyzOF4McZmiZ8aYbxppbUWYrHnNKOGZI9FDsf6w3+dFsFyLDjIdusiOy9ygrQHAoJPcZ70ANfywu5wgTnkqIH82gpT94p4hcOdSTFBchpDXMdy87k/cM0x3WB+40p3h8BJEs8iDdGi/BdDraVcuU9M4/409MxgMZps0lp5VgtyYTrqXFFRUSkYGTRI0xuMihDAb4ekvnI5nhlkAdNvTFODKAMYry2zvSppg9QKKr4lSJ7bB2FfeQoJI9a3NskHpW3yd89TUmzIkATWEl1ICznPrXwQEk9KVtMHuNqVtsjb4VQHMnMQs2wEgco+6lKbE25sU9acmW0Ag5Apez5QGVEfOiCUJgzcuHNpv8N2BcI/Oy8MKA2P0PrQKz4P8ASj0ovPaluIZJz5aG0BWPTmO34VNTVxhI9lLzeR/WFKI10VJcDESNIcUemGVBJ/tEAfjTVV9tQIQ4gWUN1EALP4ZOEdqCS5ZJU5STnmly1kn5hHKPwqSLZY7PZYiLfZ7bGhRke60w0lCR8cDv8aXN2u6rSFy37ZbWz1cuFxZZSB/eJ/CtUq7cM7YFC6cYtOJW2kqcTB55/KB1/oquRff82TI+FPpMLTQ64rWvykjoKYp/Gzw5WdtKlav1HenCAcQbclpCh/7uCPvoTuXin4SxOb9h8M7vOV+65cLryg/NtIKaEa9vzGX6yQH32WgVOLSgepOBSNdwjqBLbvmY/wDDHN+VQldPFJqKTIcNi0Tp22I/wakxlOuD5qUcH7qDrrxz4s3l50P35yMyGlFIjR0sgHrjKQM7Aj61Xaues7BlkZE1SEKdEV8pSM5Ujl/0sVlVDul+1ZdcG63ibJUsc2HH1KG/wztWUBr6wccwgqYyUlt46itKo4V1p4XFJ6p/CkzscpBUfypIgr1l1PlGOdao1waXFlN87S9lJPQivlv05aIOPs1tjoI7hsZpywhJJUoD69KTu6h07CV5cm9QkLz7peTzfdnNShJ4EsQM5McGo+CDjYDpXi9XW3actMm9XR0txoqOdwhOT6AAdySQAPU0k/lbZUJCmjKfyMgNxnMK+SiAn8ajzjPxTi2vSJiIs8luVMeQIpfKAMoUF82EqJ2wOvciipSXYLiczgCbJfFC/wAxoTjPg6fiOJKm2XG0OyW0+rhWtKQon91KVY7ml1i4uyWS45PuUS5wI6A65LjsnCU82ClRGyVDr3B/Cqgzb1MlL86TIW4egBUTgDtW5vVF5ZZ8i3OKaCgUq5P3gRjBrSGnQcQG4mWnv/iftUa6iBYo7S44ODJcSVlXySFJx9TWi1+Ja5B8tT0QE8ykltRYWUFPcKKVZSfQgKqpqjNUSpaV5J32p5jSlzohbb/70yNieqgKsKExgCQWMvdo3jPpPVEdSXnUwJaDuytwLCx/EkgZx8CAfhTzJ4ladiq/m1rd397YD8TVAbFrGZBkoQt1SFIUOVQJygjuD1FSPa79HvSTySlqfSAVoWrJ+ee4+NI6lO4G4Di"
      //     },
      //     "aadhar_card_front": {
      //       "type": "string",
      //       "format": "binary",
      //       "nullable": true,
      //       "example": "test.png"
      //     },
      //     "aadhar_card_back": {
      //       "type": "string",
      //       "format": "binary",
      //       "nullable": true,
      //       "example": "test.png"
      //     }
      //   }
      // },
      // "createBankDetail": {
      //   "type": "object",
      //   "properties": {
      //     "bank_name": {
      //       "type": "string",
      //       "required": true,
      //       "example": "HDFC bank ltd."
      //     },
      //     "ifsc_code": {
      //       "type": "string",
      //       "required": true,
      //       "example": "HDFC13007"
      //     },
      //     "account_number": {
      //       "type": "string",
      //       "required": true,
      //       "example": "97653214521245"
      //     },
      //     "account_holder_name": {
      //       "type": "string",
      //       "required": true,
      //       "example": "john deo"
      //     },
      //     "bank_passbook": {
      //       "type": "string",
      //       "format": "binary",
      //       "nullable": true,
      //       "example": "test.png"
      //     }
      //   }
      // },
      // "createDeposit": {
      //   "type": "object",
      //   "properties": {
      //     "currency_id": {
      //       "type": "integer",
      //       "required": true,
      //       "example": "3"
      //     },
      //     "amount": {
      //       "type": "integer",
      //       "required": true,
      //       "example": "HDFC13007"
      //     },
      //     "remark": {
      //       "type": "string",
      //       "required": true,
      //       "example": "hello this is new remark"
      //     }
      //   }
      // }

    },
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "in": "header",
        "name": "Authorization",
        "description": "Bearer token to access these api endpoints",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      },
      "ApiKeyAuth": {
        "type": "apiKey",
        "in": "header",
        "name": 'X-API-KEY',
        "example": ``
      },

      "securityDefinitions": {

      }
    }
  }
})