import React from "react";
import { createForm } from "@formily/core";
import { FormProvider, createSchemaField } from "@formily/react";
import "antd/dist/antd.css";
import "./styles.css";

import {
  Form,
  FormItem,
  ArrayCards,
  FormLayout
} from "@formily/antd";
import {
  Input,
  Checkbox,
  Select,
  ArrayItems,
  PreviewText
} from "@formily/antd";
import { Card, Button } from "antd";
import "antd/dist/antd.css";

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
      "x-decorator": "FormItem",
      "x-component": "Input"
    },
    toolName: {
      type: "string",
      title: "Tool Name",
      "x-decorator": "FormItem",
      "x-component": "Input"
    },
    requestsWrapper: {
  "type": "void",
  "x-decorator": "FormItem",
  "x-component": "Card",
  "x-component-props": {
    "title": "Requests",
    "style": {
      "marginBottom": 24,
      "background": "#fff7f0",  // 🍊 light orange background
      "borderRadius": 8,
      "boxShadow": "0 2px 6px rgba(0,0,0,0.05)"
    }
  },
      properties: {
        requests: {
          type: "array",
          "x-decorator": "FormItem",
          "x-decorator-props": {
            label: false
          },
          "x-component": "ArrayCards",
          items: {
            type: "object",
            "x-component-props": {
              title: "{{self.name}}"
            },
            properties: {
              name: {
                type: "string",
                title: "Name",
                "x-decorator": "FormItem",
                "x-component": "Input"
              },
              actionName: {
                type: "string",
                title: "Action Name",
                enum: ["CREATE", "READ", "UPDATE", "DELETE", "EXECUTE", "LOGIN"],
                "x-decorator": "FormItem",
                "x-component": "Select"
              },
              method: {
                type: "string",
                title: "Http Method",
                enum: [
                  "GET", "PUT", "POST", "PATCH", "DELETE", "COPY", "HEAD", "OPTIONS",
                  "LINK", "UNLINK", "PURGE", "LOCK", "UNLOCK", "PROPFIND", "VIEW"
                ],
                "x-decorator": "FormItem",
                "x-component": "Select"
              },
              url: {
                type: "string",
                title: "Url",
                "x-decorator": "FormItem",
                "x-component": "Input"
              },
              variables: {
                type: "array",
                title: "Variables",
                "x-decorator": "FormItem",
                "x-component": "ArrayItems",
                items: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      title: "Name",
                      "x-decorator": "FormItem",
                      "x-component": "Input"
                    },
                    label: {
                      type: "string",
                      title: "Label",
                      "x-decorator": "FormItem",
                      "x-component": "Input"
                    },
                    defaultValue: {
                      type: "string",
                      title: "Default Value",
                      "x-decorator": "FormItem",
                      "x-component": "Input"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    credentials: {
      type: "string",
      title: "Credentials Config Name",
      "x-decorator": "FormItem",
      "x-component": "Input"
    },
    debugMode: {
      type: "boolean",
      title: "Debug Mode",
      "x-decorator": "FormItem",
      "x-component": "Checkbox"
    },
    verifySsl: {
      type: "boolean",
      title: "Verify Ssl",
      "x-decorator": "FormItem",
      "x-component": "Checkbox"
    }
  }
};

const form = createForm({
  values: {
    name: "Data Collectors",
    toolName: "Data Collectors",
    credentials: "Credentials",
    debugMode: true,
    verifySsl: true,
    requests: [
      {
        name: "Execute Data Collectors Workflow",
        actionName: "EXECUTE",
        method: "POST",
        url: "https://{{serverUrl}}/api/v2/workflow/{{workflowName}}/start?isDeployBeforeStart={{isDeployBeforeStart}}",
        variables: [
          {
            name: "workflowName",
            label: "Name of the workflow",
            defaultValue: "{{workflowName}}"
          },
          {
            name: "isDeployBeforeStart",
            label: "Deploy before starting the workflow",
            defaultValue: "true"
          }
        ]
      }
    ]
  }
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Checkbox,
    Select,
    ArrayCards,
    ArrayItems,
    PreviewText,
    FormLayout,
    Card
  }
});

export default function App() {
  return (
        <div className="orange-background">
<div className="form-container">
   <h1 className="form-title">Access Configuration</h1>
  <p className="form-description">Fill out the details below to configure your tool access.</p>
      <FormProvider form={form}>
        <Form layout="vertical">
          <SchemaField schema={schema} />
          <FormItem>
            <div className="submit-button-wrapper">
  <Button
    className="custom-submit-btn"
    onClick={() =>
      form.submit(values => alert(JSON.stringify(values, null, 2)))
    }
  >
    Submit
  </Button>
</div>

          </FormItem>
        </Form>
      </FormProvider>
    </div>
        </div>
  );
}
