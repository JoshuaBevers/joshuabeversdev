terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "4.2.0"
    }
  }
}

provider "aws" {
    access_key = env.access_key
    secret_key = env.secret_key
    region     = env.region
}