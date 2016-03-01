import os
import subprocess
import time
import logging

# create logger with 'spam_application'
logger = logging.getLogger('convert')
logger.setLevel(logging.DEBUG)

# create file handler which logs even debug messages
fh = logging.FileHandler('conv.log')
fh.setLevel(logging.DEBUG)

# create console handler with a higher log level
ch = logging.StreamHandler()
ch.setLevel(logging.ERROR)

# create formatter and add it to the handlers
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh.setFormatter(formatter)
ch.setFormatter(formatter)

# add the handlers to the logger
logger.addHandler(fh)
logger.addHandler(ch)

###

## --------------------------------------------- mOvOm ------
def shell(cmd):
  logger.info( cmd )
  time.sleep(1)
  subprocess.check_call(cmd, shell=True)

###

for fi in os.listdir('orig'):
    orig = fi
    dest = os.path.splitext(fi)[0]
    print 'fi :' + fi + "..." + dest
    cmd = 'convert ./orig/%s -resize 440 -gravity center -extent 650x350 -background white ./portfolio/%s.png' % (fi, dest)
    print cmd
    print os.getcwd()
    shell(cmd)
