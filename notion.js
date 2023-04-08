import * as dotenv from 'dotenv';
dotenv.config()
import { Client } from "@notionhq/client"
const notion = new Client({ auth: 'secret_m4SNAvg22yQn2nZZJd4AnC2PPBI9nDYGQvB6kERXyv7' })


const createPage = async () => {
  const pageId = '8e2776df-9b76-4107-a97b-c8b11f554745';

  const response = await notion.pages.create({
    "parent": {
      "type": "page_id",
      "page_id": "8e2776df-9b76-4107-a97b-c8b11f554745"
    },
    "properties": {
      "Name": {
        "title": [
          {
            "text": {
              "content": "Tuscan kale"
            }
          }
        ]
      },
      "Description": {
        "rich_text": [
          {
            "text": {
              "content": "A dark green leafy vegetable"
            }
          }
        ]
      },
      "Food group": {
        "select": {
          "name": "🥬 Vegetable"
        }
      }
    },
  })
}


createPage()



