import 'package:plugin_platform_interface/plugin_platform_interface.dart';

import 'networksandcircuits_method_channel.dart';

abstract class NetworksandcircuitsPlatform extends PlatformInterface {
  /// Constructs a NetworksandcircuitsPlatform.
  NetworksandcircuitsPlatform() : super(token: _token);

  static final Object _token = Object();

  static NetworksandcircuitsPlatform _instance = MethodChannelNetworksandcircuits();

  /// The default instance of [NetworksandcircuitsPlatform] to use.
  ///
  /// Defaults to [MethodChannelNetworksandcircuits].
  static NetworksandcircuitsPlatform get instance => _instance;

  /// Platform-specific implementations should set this with their own
  /// platform-specific class that extends [NetworksandcircuitsPlatform] when
  /// they register themselves.
  static set instance(NetworksandcircuitsPlatform instance) {
    PlatformInterface.verifyToken(instance, _token);
    _instance = instance;
  }

  Future<String?> getPlatformVersion() {
    throw UnimplementedError('platformVersion() has not been implemented.');
  }
}
