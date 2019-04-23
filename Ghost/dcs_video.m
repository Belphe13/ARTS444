%% Video Processing
% This example uses the Decorrelation Stretch Algorithm to process
% video. It shows how to read, write, process and display videos.
%% Read a video into MATLAB
videoFileReader = VideoReader('Ghost_Intro.mp4');
myVideo = VideoWriter('myFile.mp4');
depVideoPlayer = vision.DeployableVideoPlayer;
open(myVideo);
%% Image Processing in each frame
while hasFrame(videoFileReader)
    videoFrame = readFrame(videoFileReader);
    % Apply DStretch
    videoFrame2 = decorrstretch(videoFrame);
    % Display video
    depVideoPlayer(videoFrame2);
    % Write frame to a video
    writeVideo(myVideo, videoFrame2);
    %pause(1/videoFileReader.FrameRate);
end
close(myVideo)
