import os

for (root,dirs,files) in os.walk('.', topdown=True):
        print (root)
        print (dirs)
        print (files)
        print ('--------------------------------')