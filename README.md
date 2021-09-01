# Pipeline to Shift-left

The purpose of this exercise is to design a pipeline to encourage
clean practices.
Not to solve the problems of today, but to expose the problems faster -
so that future maintenance is prevented from making mistakes.

The idea is to enable teams to deliver faster, with higher reliability.
Shift-left is about shifting failures 'to the left', closer to development -
so that mistakes are caught early and can be fixed with minimal effort.

Here, 'mistakes' include bugs and also coding-structures
that make maintenance expensive. 

## About this example

This is a nodejs implementation of a patient-monitor record-keeper.
It offers these interfaces:

1. POST patient-monitoring recods
1. GET statistics (minimum and maximum) per parameter.

It has issues, yet the pipeline passes. **Your job is to make the pipeline fail by exposing the issues.** 

## Issues that need to be 'shifted left' by the pipeline

Here are some of the issues with the implementation. Create a failing pipeline for any _two_ of them:

- **Duplication**. The code repeats a check in every interface. The problem here is duplication - an update will trigger multiple modifications. Your pipeline must fail due to code-duplication, so that developers would need to address this for the pipe to pass.
- **Coverage**. Error conditions are not covered by the tests. That means an improper error handling will get detected only when the end-user encounters the error. Make a pipe that will fail due to lack of test-coverage.
- **Vulnerabilities**. If a developer adds dependency to a 3rd party npm library that's vulnerable, it goes unnoticed. Build a pipeline that will fail on finding a vulnerable dependency.
- **Confidence**. Even when we remove the code to compute the statistics, the tests will pass. The tests do not give confidence. Design a step in the pipeline to fail due to 'weak tests'.
- **Documentation**. This file has spelling mistakes. Make a pipeline to fail on spelling issues, so that maintainers will realize such mistakes as soon as they push their changes.
- **Staging**. To run this code, we need to follow manual steps - see [instructions](instructions.md). Make a script to set it up on any system, including tests for such a script.
- **Production**. Once the staged software is proven, it needs to be moved to Production. How would you achieve that?

### Non-functional considerations

- **How quickly** can you deliver the failure to a developer? Here the considerations are: Can developers run it while developing, without having to push the code for evaluation all the time? How long does it take to deliver a failure?
- Is it **easy to re-use** these pipelines in another GitHub repo? How about another non-GitHub repo?
- Is it **easy to fix** when we notice a mistake or improvement in the pipeline? How about deploying these improvements in every repo that uses our pipeline?

## Hints and References

Use GitHub actions to make your pipeline. The initial pipeline is inside the .github folder.
To show multiple failures, use multiple workflow yml files.
