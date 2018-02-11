import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);