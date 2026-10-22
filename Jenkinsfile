pipeline {
    options {
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '14', numToKeepStr: '10')
        copyArtifactPermission '/Sysadmin/hlt-api_deploy'
    }
    triggers {
        parameterizedCron('''
                0 11 * * * %BRANCH_NAME=releases/dev;BUILD_ENV=dev
        ''')
    }
    agent any
    parameters {
        choice choices: ['', 'dev', 'qa', 'prf', 'prd'], description: 'Build/Deploy ENV', name: 'BUILD_ENV'
    }
    environment {
        APP_NAME = 'hlt_web_components'
    }
    stages {
        stage('Run the build and deploy') {
            steps {
                script {
                    try {
                        env.COMMIT_TAG = "${env.BRANCH_NAME}"
                    }
                    catch (err) {
                        env.COMMIT_TAG = "${env.TAG_NAME}"
                    }
                    env.BUILD_ENV = "${params.BUILD_ENV}"

                    def build_job = build(job: "/Sysadmin/${env.APP_NAME}_deploy", parameters: [
                                                              string(name: 'COMMIT_TAG', value: "${env.COMMIT_TAG}"),
                                                              string(name: 'APP_NAME', value: "${env.APP_NAME}"),
                                                              string(name: 'Workspace_Home', value: "${WORKSPACE}"),
                                                              string(name: 'BUILD_ENV', value: "${env.BUILD_ENV}"),
                                                             ])
                }
            }
        }
    }
    post {
        // success{
        //     emailext body: "View output of Build: ${BUILD_URL}", subject: "BUILD: SUCCEEDED Job Name: ${JOB_NAME} (${BRANCH_NAME})", to: 'dg_nextgen_BE_developers@hobbylobby.com'
        // }
        // failure{
        //     emailext attachmentsPattern: '**/*.log', body: 'View output of Build: ${BUILD_URL}', subject: 'BUILD: FAILED Job Name: ${JOB_NAME} (${BRANCH_NAME})', to: 'dg_nextgen_BE_developers@hobbylobby.com'
        // }
        always {
            script{
                try {
                    echo "${env.build_job_number}"
                    copyArtifacts filter: "*.log", fingerprintArtifacts: true, projectName: '/Sysadmin/hlt-api_deploy', selector: specific("${env.build_job_number}")
                    archiveArtifacts artifacts: '*.log', fingerprint: true
                } catch (Exception e) {
                    echo 'no files to archive'
                }
            }
        }
        cleanup {
            cleanWs()
        }
    }
}
