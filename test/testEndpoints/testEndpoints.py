import json
import os
import pytest
import requests
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger()


@pytest.fixture
def resume_url():
    return os.getenv('DRIVE_LAMBDA_URL')


@pytest.fixture
def slack_webhook_url():
    return os.getenv('SITE_WEBHOOK_URL')


@pytest.fixture
def resume_obj():
    abs_path = os.path.abspath('.')
    path_comps = abs_path.split('/')
    # added path to actual resume for comparison
    path_comps.append('artifacts')
    path_comps.append('Resume.pdf')

    path = '/'.join(path_comps)

    # read in file
    file = open(path, encoding='utf-8')

    return {
        'path': path,
        'file': file
    }


class TestEndpoint:

    def test_200_google_drive_api(self, resume_url):
        logger.info('Sending POST request Google Lambda func...')
        response = requests.request(method='POST', url=resume_url)

        assert (response.status_code == 200), f'ERROR: Expected a 200 instead got a {response.status_code}'

    def test_resume_file_size(self, resume_obj, resume_url):
        resume_path = resume_obj['path']

        logger.info('Sending POST request Google Lambda func...')
        response = requests.request(method='POST', url=resume_url)

        logger.info(f'Current version of resume file size: {os.path.getsize(resume_path) // 1000} kbs...')

        assert (response.status_code == 200), f'ERROR: Expected a 200 instead got a {response.status_code}'

        payload = json.loads(response.json())

        binary_data = bytes(payload['buffer']['data'])

        # turn returned byte array into bytes obj for converting into file
        # should exist under curr_dir/resume.pdf
        with open("resume.pdf", "wb") as resume_file:
            resume_file.write(binary_data)

        returned_resume_pdf_path = os.path.abspath('resume.pdf')
        returned_resume_pdf_size = os.path.getsize(returned_resume_pdf_path) // 1000
        actual_resume_pdf_size = os.path.getsize(resume_path) // 1000

        assert (returned_resume_pdf_size == actual_resume_pdf_size), (f'ERROR: File sizes are different, actual file '
                                                                      f'size:{actual_resume_pdf_size} kbs returned file'
                                                                      f' size:{returned_resume_pdf_size} kbs')





